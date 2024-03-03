const express = require("express")
require('dotenv').config()

const app = express()

mongoose

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`APP RUNNING ON ${PORT}`)
})