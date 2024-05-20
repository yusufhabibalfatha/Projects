const router = require('express').Router()

const { getAllBlog, getBlog, postBlog, updateBlog, deleteBlog } = require('./controller')

router.get('/', getAllBlog)
router.get('/:id', getBlog)
router.post('/post', postBlog)
router.post('/edit/:id', updateBlog)
router.post('/delete/:id', deleteBlog)

module.exports = router

