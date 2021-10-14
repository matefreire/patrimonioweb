const express = require('express');
const app = express()
const port = 8080
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const Material = require('./models/Material');

//mateus fela
const bcrypt = require('bcrypt');
const db = require('./models/db');
const path = require("path");


// Configurações
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Criando template engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}));
    app.set('view-engine', 'handlebars');

    app.use(express.static(path.join(__dirname, "public")));

//Routes
app.get('/', (req, res) => {
    
    res.render(__dirname +'/views/layouts/login.handlebars')
});

app.get('/home', (req, res) => {
    
    res.render(__dirname +'/views/layouts/home.handlebars')
});

app.get('/materiaisww', (req, res) => {
    
    Material.findAll().then((material)=>{
        res.render(__dirname +'/views/layouts/materiaisWW.handlebars', {material: material})
    });

});

app.get('/cadastrarmaterial', (req, res) => {
    res.render(__dirname +'/views/layouts/cadastrarmaterial.handlebars')
})

app.post('/cadastrarmaterial', (req, res) => {
    
    Material.create({
        codigo: req.body.codigo,
        descricao: req.body.descricao,
        valor: req.body.valor
    }).then(()=>{
        res.redirect('materiaisww')
    }).catch((e)=>{
        res.send('Houve um erro. Erro: '+e)
    })
})

app.get('/validarLogin', (req, res) => {
    
    let senhaHash = bcrypt.hash(req.body.senha,10)
    // Busca se tem login cadastrado e se a senha está correta
    let resultadoConsulta = Usuario.findAll({
        where: {
            [db.Sequelize.Op.and]: [
            {login: req.body.login},
            {senha: senhaHash}]
        }
    })
    
    if (resultadoConsulta != null) {
        // console.log({resultadoConsulta})
        res.redirect('/home');
    } else {
        // console.log({resultadoConsulta})
        res.send('Erro ao validar o usuário! Erro: '+error);
    }
})
// res.render(__dirname +'/views/layouts/login.handlebars')
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})