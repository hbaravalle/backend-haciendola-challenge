const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        handle: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
        },
        sku: {
          type: DataTypes.BIGINT.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        grams: {
          type: DataTypes.SMALLINT,
        },
        stock: {
          type: DataTypes.SMALLINT,
        },
        price: {
          type: DataTypes.SMALLINT,
          allowNull: false,
        },
        compare_price: {
          type: DataTypes.SMALLINT,
        },
        barcode: {
          type: DataTypes.BIGINT,
          default: null,
          unique: true,
          allowNull: false,
          validate: {
            isNumeric: true,
          },
        },
      },
      {
        sequelize,
        modelName: "product",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
    return Product;
  }
}

module.exports = Product;
