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

    const updates = {};
    if (handle !== undefined) updates.handle = handle;
    if (title !== undefined) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (sku !== undefined) updates.sku = sku;
    if (grams !== undefined) updates.grams = stock;
    if (stock !== undefined) updates.stock = stock;
    if (price !== undefined) updates.price = price;
    if (compare_price !== undefined) updates.compare_price = compare_price;
    if (barcode !== undefined) updates.barcode = barcode;

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
