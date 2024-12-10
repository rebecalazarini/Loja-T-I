//chamando as dependencias
const con = require('../connect/connect').con;

const read = ( req,res)=>{
     con.query('SELECT * FROM clientes',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}

module.exports = {
    read
}