const db = require('./db');

const Material = db.sequelize.define('materiais', {
    condigo: {
        type: db.DataTypes.INTEGER
    },
    descricao: {
        type: db.DataTypes.STRING
    },
    valor: {
        type: db.DataTypes.FLOAT
    },
    valorAtualizado: {
        type: db.DataTypes.FLOAT,
        defaultValue: 0
    }
});

Material.sync();

module.exports = Material;