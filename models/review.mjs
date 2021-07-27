export default function initReviewModel(sequelize, DataTypes) {
  return sequelize.define(
    'review', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.STRING,
      },
      movieId: {
        type: DataTypes.INTEGER,
        // This links the movie_id column to the id column in the movie table
        references: {
          model: 'movies',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        // This links the movie_id column to the id column in the movie table
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
