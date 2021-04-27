const Sequelize = require('sequelize');
const database = process.env['database']
const user = process.env['user']
const senha = process.env['senha']

const connection = new Sequelize(database, user, senha, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;