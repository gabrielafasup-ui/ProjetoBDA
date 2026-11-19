const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
nome: {
    type: Sequelize.STRING,

},
email: {
    type: Sequelize.STRING,
    

},
     senha: Sequelize.STRING,

      
});

async function createUsuario(nome,email, senha) {
    try {
        const novoUsuario = await Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        });
        console.log('Novo usuario criado:', novoUsuario.toJSON());
    } catch (error) {
        console.error('Erro ao criar usuario:', error);
    }
}

 module.exports = Usuario;