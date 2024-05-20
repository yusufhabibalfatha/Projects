const mysql = require('mysql2/promise')

const connection = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'blogger',
    })
}

module.exports = connection