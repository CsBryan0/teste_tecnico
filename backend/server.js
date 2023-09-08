// const express = require('express')
// const connection = require('./src/database')
// const bodyParser = require('body-parser')

// const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

// // Configuração de rotas
// const apiRoutes = require('./src/routes/api')
// app.use('/api', apiRoutes)


// const PORT = 3000
// app.listen(PORT, () => {
//     console.log("Funcionando em http://localhost:3000")
// })

// backend/server.js

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const pricingRoutes = require('./src/routes/api');

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração do body parser para JSON
app.use(express.json());

// Configuração do file upload
app.use(fileUpload());

// Rotas
app.use('/api/pricing', pricingRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
