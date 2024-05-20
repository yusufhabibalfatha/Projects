const express = require('express')
const cors = require('cors')
const appRoute = require('./routes/route')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/sendmail', appRoute)

app.post('/', (req, res) => {
    console.log('asd->', req.body)
    res.status(201).json({msg:'connect'})
})

app.listen(5000, () => {
    console.log('server is running in port 5000;')
})