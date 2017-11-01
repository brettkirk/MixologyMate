const db = require('../connection');
const Sequelize = require('sequelize');
const bCrypt = require('bcryptjs');
const defaultTheme = 1;

const generateHash = (password) => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

const UserModel = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // oAuthUserId: {
  //   type: Sequelize.STRING(128)
  // },
  // oAuthProvider: {
  //   type: Sequelize.STRING(32)
  // },
  email: {
    type: Sequelize.STRING(128),
    unique: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: Sequelize.STRING(64),
    unique: true,
    notEmpty: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(64)
  },
  // theme: {
  //   type: Sequelize.INTEGER(4)
  // },
  name: {
    type: Sequelize.STRING(64),
    notEmpty: true,
    allowNull: false
  },
  avatarSrc: {
    type: Sequelize.STRING(512)
  },
  description: {
    type: Sequelize.STRING(512)
  },
  status: {
    type: Sequelize.STRING(16)
  },
  wantsNewsLetter: {
    type: Sequelize.BOOLEAN
  }
});

let User = {model: UserModel};

User.create = ({email, username, password, name, avatarSrc, description, status = 'user', wantsNewsLetter}) => {
  return User.model.create({
    oAuthUserId,
    oAuthProvider,
    email,
    username: username
    password: generateHash(password),
    theme: defaultTheme,
    name,
    profession,
    avatarUrl,
    description
  });
};

User.update = (userId, query) => {
  if (!query) {
    return Promise.reject('No update query was specified');
  }
  if (query.oAuthUserId || query.oAuthProvider) {
    return Promise.reject('Cannot modify oAuth data');
  }
  return User.getById(userId)
    .then((user) => {
      if (query.password) {
        return Promise.reject('Cannot update password field in update method - try the updatePassword method instead');
      }
      return user.update(query);
    });
};

User.updatePassword = ({userId, currentPassword, newPassword}) => {
  if (!(currentPassword && newPassword)) {
    return Promise.reject('Must provide both current password and new password when changing password');
  }
  return User.getById(userId)
    .then((user) => {
      if (user.oAuthUserId) {
        return Promise.reject('Cannot update password for oAuth user');
      }
      if (!bCrypt.compareSync(currentPassword, user.password)) {
        return Promise.reject('Current password is incorrect');
      }
      password = generateHash(newPassword);
      return user.update({password});
    });
};

User.follow = (followerId, followeeId) => {
  if (followerId === followeeId) {
    return Promise.reject('Cannot follow yourself');
  }
  return User.getById(followerId)
    .then((follower) => {
      return User.getById(followeeId)
        .then((followee) => {
          return followee.addFollower(follower);
        });
    })
    .then((response) => {
      return true;
    });
};

User.unfollow = (followerId, followeeId) => {
  return User.getById(followerId)
    .then((follower) => {
      return User.getById(followeeId)
        .then((followee) => {
          followee.removeFollower(follower);
        });
    })
    .then((response) => {
      return true;
    });
};

User.getFollowers = (userId) => {
  return User.model.findOne({
    where: {
      id: userId
    },
    include: [
      {
        model: User.model,
        as: 'follower',
        attributes: {
          exclude: ['password']
        }
      }
    ]
  })
    .then((user) => {
      return user ? user.follower : Promise.reject('User does not exist');
    });
};

User.getFollows = (userId) => {
  return User.model.findOne({
    where: {
      id: userId
    },
    include: [
      {
        model: User.model,
        as: 'followee',
        attributes: {
          exclude: ['password']
        }
      }
    ]
  })
    .then((user) => {
      return user ? user.followee : Promise.reject('User does not exist');
    });
};

User.getByEmail = (email) => {
  return User.model.findOne({
    where: {email}
  })
    .then((user) => {
      return user ? user : Promise.reject('User does not exist');
    });
};

User.getByUsername = (username) => {
  return User.model.findOne({
    where: {username}
  })
    .then((user) => {
      return user ? user : Promise.reject('User does not exist');
    });
};

User.getById = (userId) => {
  return User.model.findById(userId)
    .then((user) => {
      return user ? user : Promise.reject('User does not exist');
    });
};

// TODO - Write tests for this function
User.getByOAuthId = (oAuthUserId, oAuthProvider) => {
  return User.model.findOne({
    where: {oAuthUserId, oAuthProvider}
  })
    .then((user) => {
      return user ? user : Promise.reject('User does not exist');
    });
};

module.exports = User;