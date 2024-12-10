//Depemdemcias e framework's

const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

//configurações de saída para o front
const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3000,() => {
    console.log("Servidor respondendo na porta 3000")
})