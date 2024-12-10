//dependencias pra funcionar
const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')

//Rota(Endpoint) de teste
const teste = (req,res)=>{
    res.json("Api respondendo");
}

router.get('/',teste);
router.get('/clientes',clientes.read);

module.exports = router;