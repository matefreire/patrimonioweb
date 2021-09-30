const express = require('express');
const app = express()
const port = 8080
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const bcrypt = require('bcrypt');
const db = require('./models/db')

// Configurações
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Criando template engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}));
    app.set('view-engine', 'handlebars');



//Routes
app.get('/', (req, res) => {
    //Validar usuário
    res.render(__dirname +'/views/layouts/login.handlebars')
})
app.get('/validarLogin', (req, res) => {
    //Validar usuário
    let senhaHash = bcrypt.hash(req.body.senha,10)
    // Busca se tem login cadastrado e se a senha está correta
    let resultadoConsulta = Usuario.findAll({
        where: {
            [db.Sequelize.Op.and]: [
            {login: req.body.login},
            {senha: senhaHash}]
        }
    });

    if (resultadoConsulta.login == null) {
        console.log('Erro ao efetuar login');
    }

    
    // res.render(__dirname +'/views/layouts/login.handlebars')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})