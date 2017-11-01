const Drink = require('./models/drink.js');
const User = require('./models/user.js');
const Brand = require('./models/brand.js');

const connection = require('./connection');
connection.clear = () => {
  return connection.sync({force: true});
};

Drink.model.belongsToMany(User.model, {through: 'favorites', as: 'drink', foreignKey: 'userId'});
User.model.belongsToMany(Drink.model, {through: 'favorites', as: 'user', foreignKey: 'drinkId'});

User.model.belongsToMany(User.model, {through: 'friends', as: 'friender', foreignKey: 'friendedId'});
User.model.belongsToMany(User.model, {through: 'friends', as: 'friended', foreignKey: 'frienderId'});

User.model.belongsTo(Drink.model, {as: 'mixologist'});

Drink.model.belongsToMany(Brand.model, {as: 'foundIn'})
Brand.model.belongsToMany(Drink.model, {as: 'idealBrand'})

// User.model.belongsToMany(Project.model, {through: Contributor.model, as: 'project', foreignKey: 'contributorId'});
// Project.model.belongsToMany(User.model, {through: Contributor.model, as: 'contributor', foreignKey: 'projectId'});

// User.model.belongsToMany(User.model, {through: 'followers', as: 'follower', foreignKey: 'followeeId'});
// User.model.belongsToMany(User.model, {through: 'followers', as: 'followee', foreignKey: 'followerId'});

// Project.model.belongsToMany(Tag.model, {through: 'projectTags', as: 'tag', foreignKey: 'projectId'});
// Tag.model.belongsToMany(Project.model, {through: 'projectTags', as: 'project', foreignKey: 'tagId'});

// Like.model.belongsTo(User.model, {as: 'user'});

// Project.model.belongsTo(User.model, {as: 'owner'});

// ProjectComponent.model.belongsTo(Project.model, {as: 'project'});
// ProjectComponent.model.belongsTo(User.model, {as: 'author'});

// Comment.model.belongsTo(User.model, {as: 'user'});

module.exports = {
  Drink,
  User,
  Brand,
  connection
};