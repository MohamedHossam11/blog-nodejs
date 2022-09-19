const Sequelize = require('sequelize');

var sequelize = require('../configs/db_config');

const { Model } = Sequelize;

class Account extends Model {}
Account.init(
  {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Account;
export {};
