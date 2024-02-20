
const mysql = require('mysql2/promise')

const DB = async function()
{
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'ecommerce'
    })
}

module.exports = DB