require("dotenv").config();

const productRouter = require("./routes/productRoutes");
const express = require("express");

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.use("/api/products", productRouter);

app.listen(3000, () =>
  console.log("[Server] API running at", `http://localhost:${PORT}`)
);
