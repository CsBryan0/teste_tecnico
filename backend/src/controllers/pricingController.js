const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');


function isValidPrice(preco) {
    return typeof preco === 'number' && preco > 0;
}

function isPriceWithinRange(preco) {
    const MIN_PRICE = 0; // Defina o valor mínimo desejado
    const MAX_PRICE = 1000; // Defina o valor máximo desejado
    return preco >= MIN_PRICE && preco <= MAX_PRICE;
}

function isPriceChangeWithinLimit(precoAtual, novoPreco) {
    const MAX_PRICE_PERCENTAGE = 0.10;
    const maxChange = precoAtual * MAX_PRICE_PERCENTAGE;
    return Math.abs(novoPreco - precoAtual) <= maxChange;
}

const pricingController = {
    uploadFile: (req, res) => {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ error: 'Arquivo não encontrado' });
        }

        const file = req.files.file;
        const uploadPath = path.join(__dirname, '../uploads/', file.name);

        file.mv(uploadPath, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });

        const results = [];

        fs.createReadStream(uploadPath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                const validationErrors = [];

                results.forEach((product) => {
                    if (!product || !isValidPrice(product.novoPreco)) {
                        validationErrors.push('Campos obrigatórios ausentes ou preço inválido');
                        return;
                    }

                    if (!isPriceChangeWithinLimit(product.precoAtual, product.novoPreco)) {
                        validationErrors.push('Ultrapassou a mudança de apenas 10%');
                        return;
                    }

                    if (!isPriceWithinRange(product.novoPreco)) {
                        validationErrors.push('Preço fora do intervalo permitido');
                        return;
                    }
                });

                if (validationErrors.length > 0) {
                    return res.status(400).json({ erros: validationErrors });
                }

                fs.unlinkSync(uploadPath);

                return res.json({ message: 'Arquivo carregado e processado com sucesso' });
            });
    },

    validatePricing: async (req, res) => {
        const products = req.body.products;

        const validationErrors = [];

        for (const product of products) {
            try {
                const produtoExiste = await Product.findOne({
                    where: { code: product.code },
                });

                if (!produtoExiste) {
                    validationErrors.push(`Não existe produto com código ${product.code}`);
                }
            } catch (error) {
                console.error(`Erro ao validar o produto com código ${product.code}: ${error}`);
                validationErrors.push(`Erro ao validar o produto com código ${product.code}`);
            }
        }

        if (validationErrors.length > 0) {
            return res.status(400).json({ erros: validationErrors });
        }

        return res.json({ message: 'Arquivo validado com sucesso' });
    },

    updatePrices: async (req, res) => {
        const products = req.body.products;

        const updateErrors = [];

        for (const product of products) {
            try {
                await Product.update(
                    { price: product.novoPreco },
                    { where: { code: product.code } }
                );
            } catch (error) {
                console.error(`Erro ao atualizar o produto com código ${product.code}: ${error}`);
                updateErrors.push(`Erro ao atualizar o produto com código ${product.code}`);
            }
        }

        if (updateErrors.length > 0) {
            return res.status(500).json({ erros: updateErrors });
        }

        return res.json({ message: 'Preço atualizado com sucesso' });
    }
};

module.exports = pricingController;
