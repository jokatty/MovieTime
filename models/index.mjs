import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';
import initMovieModel from './movie.mjs';
import initReactionModel from './reaction.mjs';
import initReviewModel from './review.mjs';
import initUserModel from './user.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Movie = initMovieModel(sequelize, Sequelize.DataTypes);
db.Review = initReviewModel(sequelize, Sequelize.DataTypes);
db.Reaction = initReactionModel(sequelize, Sequelize.DataTypes);

// The following 2 lines enable Sequelize to recognise the 1-M relationship
// between Item and Category models, providing the mixin association methods.
db.Review.belongsTo(db.User);
db.User.hasMany(db.Review);
db.Review.belongsTo(db.Movie);
db.Movie.hasMany(db.Review);
db.Reaction.belongsTo(db.Review);
db.Review.hasMany(db.Reaction);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
