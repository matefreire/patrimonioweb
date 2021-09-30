const Sequelize = require('sequelize')
const sequelize = new Sequelize('patrimonioweb','admpatrimonio','senha',{host: "localhost",dialect: "mysql"});

// Testando conexão com o banco
sequelize.authenticate().then(()=>{
    console.log('Conectado ao banco com sucesso!');
}).catch((e)=>{
    console.log('Erro ao se conectar ao banco. Erro: '+e);
});

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

module.exports = {
    Sequelize = Sequelize,
    sequelize = sequelize
}