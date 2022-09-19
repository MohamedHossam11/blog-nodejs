const Post = require('./post');
const Account = require('./account');

const create_relations = () => {
  Account.hasMany(Post);
  Post.belongsTo(Account, { as: 'accounts', foreignKey: 'account_id' });
};
module.exports = { create_relations };
export {};
