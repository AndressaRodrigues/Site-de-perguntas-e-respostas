const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//chamando o express
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: FALSE}));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res) =>{
        res.render('perguntar');
    
});
/*app.get('/perguntar', (req, res) =>{
    res.render('perguntar');
    
});*/

app.listen(3000, ()=>{
  console.log("App server is running on port 3000");
});

app.post('/salvarpergunta', (req, res) => {
    //recebendo os dados inseridos no body em variaveis
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('formulário recebido');
});
