const db = require('./db');

// Criando tabela usuários
const Usuario = db.sequelize.define('usuarios', {
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

module.exports = Usuario;