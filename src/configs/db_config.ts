const sql = require('sequelize');

// Connecting to local database
const sqlConfig = new sql('blog', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sqlConfig;
