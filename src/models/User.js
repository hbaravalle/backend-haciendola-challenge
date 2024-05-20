const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

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

    User.beforeCreate(async (user) => {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
    });

    User.prototype.validatePassword = async function (password) {
      try {
        return await bcrypt.compare(password, this.password);
      } catch (error) {
        throw new Error("Error validating password");
      }
    };

    return User;
  }
}

module.exports = User;
