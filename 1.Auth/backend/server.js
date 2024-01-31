const express = require('express')
const cors = require('cors')
const app = express()
const httpRoutes = require('./routes')

app.use(express.json())
app.use(cors())
// http
app.use('/user', httpRoutes)


app.listen(4000, () => {
    console.log('server.js listening to port 4000....')
})