const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/index')

const auth = require('./routes/auth')

const app = express()

app.use(express.json())

app.use('/auth/',auth)

app.listen(PORT,() => {
    console.log(`Server is started on the Port ${PORT}`);
})