const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

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
    res.send('formulário recebido');
});
