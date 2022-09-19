const Sequelize = require('sequelize');
var sequelize = require('../configs/db_config');

const { Model } = Sequelize;

class Comment extends Model {}
Comment.init(
  {
    text: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

// Comment.belongsTo(AccountModel, { foreignKey: 'accountId' });
// Comment.belongsTo(PostModel, { foreignKey: 'postId' });

module.exports = Comment;
export {};
