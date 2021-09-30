const express = require('express');
const app = express()
const port = 8080
const Sequelize = require('sequelize')
const sequelize = new Sequelize('patrimonioweb','admpatrimonio','senha',{host: "localhost",dialect: "mysql"});
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');

// Configurações
    // Testando conexão com o banco
    sequelize.authenticate().then(()=>{
        console.log('Conectado ao banco com sucesso!');
    }).catch((e)=>{
        console.log('Erro ao se conectar ao banco. Erro: '+e);
    });
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Criando template engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}));
    app.set('view-engine', 'handlebars');


// Criando tabela usuários
const Usuarios = sequelize.define('usuarios', {
    codigo: {
        type: Sequelize.INTEGER
    }, 
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    login: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
});

Usuarios.sync();



//Routes
app.get('/', (req, res) => {
    res.render(__dirname +'/views/layouts/login.handlebars')
})

// app.get('/', (req, res) => {
//     //   res.send('Hello World!')
// })

// Lembrar de colocar isso
// res.render(__dirname +'/views/layouts/formulario')


// app.get('/', (req, res) => {
//     //   res.send('Hello World!')
// })  




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})