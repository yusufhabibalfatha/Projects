const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const serverRoutes = require('./routes')

// http req
app.use('/blog', serverRoutes)





app.listen(4000, () => {
    console.log('server backend blogger listen to port 4000...')
})