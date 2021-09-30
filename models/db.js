const Sequelize = require('sequelize')
const sequelize = new Sequelize('patrimonioweb','admpatrimonio','senha',{host: "localhost",dialect: "mysql"});

// Testando conexão com o banco
sequelize.authenticate().then(()=>{
    console.log('Conectado ao banco com sucesso!');
}).catch((e)=>{
    console.log('Erro ao se conectar ao banco. Erro: '+e);
});

module.exports = {
    Sequelize = Sequelize,
    sequelize = sequelize
}