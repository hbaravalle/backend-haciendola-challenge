const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(100),
        },
        lastname: {
          type: DataTypes.STRING(100),
        },
        username: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(100),
          unique: true,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );

    return User;
  }
}

module.exports = User;
