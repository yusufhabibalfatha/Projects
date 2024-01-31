const {connection, signup, login} = require('./database')
const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({id}, 'asd', { expiresIn: '3d'})
}

const createUser = async (req, res) => {
    const {email, password} = req.body
    const results = await signup(email, password)
    if(results.affectedRows > 0){
        const token = createToken(results.insertId)
        res.status(201).json({email, token})
    }else{
        res.status(400).json({msg: 'sorry cant signup'})
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body
    try{
        const results = await login(email, password)
        const {status, msg} = results
        if(!status){
            res.status(400).json({status, msg})
            return
        }
        const {id} = results
        const token = createToken(id)
        res.status(201).json({status, msg, email, token})
    }catch(error){
        console.log({error})
    }
}

module.exports = {
    createUser,
    loginUser
}