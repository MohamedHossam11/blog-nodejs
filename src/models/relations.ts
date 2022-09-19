const Post = require('./post');
const Account = require('./account');
const Comment = require('./comment');

const create_relations = () => {
  Comment.belongsTo(Account, { as: 'accounts', foreignKey: 'account_id' });
  Comment.belongsTo(Post, { as: 'posts', foreignKey: 'post_id' });
  Account.hasMany(Post);
  Post.belongsTo(Account, { as: 'accounts', foreignKey: 'account_id' });
};
module.exports = { create_relations };
export {};
