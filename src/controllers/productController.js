const response = require("../network/response");
const { Op } = require("sequelize");
const { Product } = require("../models");

async function list(req, res) {
  try {
    const products = await Product.findAll();
    return response.success(req, res, products);
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

async function find(req, res) {
  try {
    const product = await Product.findOne({
      where: {
        [Op.or]: [{ sku: req.params.product }, { handle: req.params.product }],
      },
    });
    return response.success(req, res, product);
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

async function create(req, res) {
  try {
    const newProduct = await Product.create({
      handle: req.body.handle,
      title: req.body.title,
      description: req.body.description,
      sku: req.body.sku,
      grams: req.body.grams,
      stock: req.body.stock,
      price: req.body.price,
      compare_price: req.body.compare_price,
      barcode: req.body.barcode,
    });
    return response.success(req, res, "Product created", 201);
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

async function update(req, res) {
  try {
    const {
      handle,
      title,
      description,
      sku,
      grams,
      stock,
      price,
      compare_price,
      barcode,
    } = req.body;
    const product = await Product.findOne({
      where: {
        [Op.or]: [{ sku: req.params.product }, { handle: req.params.product }],
      },
    });
    if (!product) {
      return response.error(req, res, "Product not found", 404);
    }

    const fields = {
      handle,
      title,
      description,
      sku,
      grams,
      stock,
      price,
      compare_price,
      barcode,
    };
    const updates = {};

    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) {
        updates[key] = value;
      }
    }

    await product.update(updates);
    return response.success(req, res, "Product updated", 200);
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

async function destroy(req, res) {
  try {
    const product = await Product.destroy({
      where: {
        [Op.or]: [{ sku: req.params.product }, { handle: req.params.product }],
      },
    });
    return response.success(req, res, "Product deleted", 200);
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

module.exports = { list, find, create, update, destroy };
