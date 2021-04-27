const Sequelize = require('sequelize');
const database = process.env['database']
const user = process.env['user']

const connection = new Sequelize(database, user, '', {
    dialect: 'mysql'
})

module.exports = connection;