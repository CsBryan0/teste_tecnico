const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'product'
    
})

console.log("Conectado com o MySQl");

module.exports = connection
