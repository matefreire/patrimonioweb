const db = require('./db');

// Criando tabela usuários
const Usuario = db.sequelize.define('usuarios', {
    codigo: {
        type: db.Sequelize.INTEGER
    }, 
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    login: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

Usuarios.sync();

module.exports = Usuario;