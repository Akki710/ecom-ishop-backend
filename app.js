// Imports
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Import routes
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
// Calling express method
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// DB connection
mongoose.connect('mongodb+srv://akki710:9251620198@test-cluster.frzty.mongodb.net/EcomDB?retryWrites=true&w=majority' ,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Database CONNECTED"))
  .catch((err) => console.log("Error occured : ", err));

// Middlewares
app.use(express.json());
app.use(cors());
// Routes
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
// Listening to port
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
