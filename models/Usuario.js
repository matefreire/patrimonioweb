const db = require('./db');

// Criando tabela usuários
const Usuario = db.sequelize.define('usuarios', {
    codigo: {
        type: db.DataTypes.INTEGER
    }, 
    nome: {
        type: db.DataTypes.STRING
    },
    email: {
        type: db.DataTypes.STRING
    },
    login: {
        type: db.DataTypes.STRING
    },
    senha: {
        type: db.DataTypes.STRING
    }
});

Usuario.sync();

module.exports = Usuario;