const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} port ${PORT}`))