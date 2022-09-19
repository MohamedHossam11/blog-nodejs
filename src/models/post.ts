const Sequelize = require('sequelize');

var sequelize = require('../configs/db_config');

const { Model: Model1 } = Sequelize;

class Post extends Model1 {}
Post.init(
  {
    text: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Post;
export {};
