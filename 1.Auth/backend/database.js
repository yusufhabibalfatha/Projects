const mysql = require('mysql2/promise')
const bcrypt = require('bcrypt')

const connection = async () => {
    return await mysql.createConnection({
        'user': 'root',
        'password': 'root',
        'host': 'localhost',
        'database': 'userAuth'
    })
}

const signup = async (email, password) => {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const db = await connection()
    const [results, fields] = await db.query(
        `insert into user values (null, '${email}', '${passwordHash}')`
    )
    return results
}

const login = async (emailLogin, passwordLogin) => {
    const database = await connection()
    const [results, fields] = await database.query(
        `SELECT * FROM user WHERE email='${emailLogin}'`
    )
    const matchEmail = results.length > 0
    if(!matchEmail) return {status: false, msg: 'wrong email'}
    const matchPassword = await bcrypt.compare(passwordLogin, results[0].password)
    if(!matchPassword) return {status: false, msg: 'wrong password'}
    const {id} = results[0]
    return {status: true, msg: 'you are login!', id}
}

module.exports = {
    connection,
    signup,
    login
}