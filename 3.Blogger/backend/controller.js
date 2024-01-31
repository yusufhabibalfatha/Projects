const moment = require('moment')
const connection = require('./database')

const getAllBlog = async (req, res) => {
    const db = await connection()
    const [results, fields] = await db.query(
        'SELECT * FROM post'
    )
    res.status(201).json(results)
}

const getBlog = async (req, res) => {
    let id = req.params.id
    const db = await connection()
    const [results, fields] = await db.query(
        `SELECT * FROM post WHERE id=${id}`
    )
    res.status(201).json(results)
}

const postBlog = async (req, res) => {
    const newBlog = {
        title: req.body.title,
        content: req.body.content,
        postdate: moment().format('YYYY-MM-DD')
    }
    const db = await connection()
    const [results, fields] = await db.query(
        `INSERT INTO post VALUES (null, '${newBlog.title}', '${newBlog.content}', '${newBlog.postdate}')`
    )
    res.status(201).json({status: `${results.affectedRows}`})
}

const updateBlog = async (req, res) => {
    const updateData = {
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        postdate: moment().format('YYYY-MM-DD')
    }
    const db = await connection()
    const [results, fields] = await db.query(
        `UPDATE post SET title='${updateData.title}', content='${updateData.content}', postdate='${updateData.postdate}' WHERE id='${updateData.id}'`
    )
    res.status(201).json({status: `${results.affectedRows}`})
}

const deleteBlog = async (req, res) => {
    const id = req.params.id
    const db = await connection()
    const [results, fields] = await db.query(
        `DELETE FROM post WHERE id='${id}'`
    )
    res.status(201).json({status: `${results.affectedRows}`})
}

module.exports = {
    getAllBlog,
    getBlog,
    postBlog,
    updateBlog,
    deleteBlog
}