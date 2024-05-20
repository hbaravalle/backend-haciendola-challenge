require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () =>
  console.log("[Server] API running at", `http://localhost:${PORT}`)
);
