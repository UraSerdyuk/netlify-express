const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ extended: true }));
app.use(cors());
const router = express.Router();

app.use("/.netlify/functions/api/auth", require("../routes/auth.routes"));

router.get("/", (req, res) => {
  res.json({
    hello: "hi+-___{}!",
  });
});

mongoose.connect(
  "mongodb+srv://cb8593bc:Racing-Bike-2000@cluster0.kmhay.gcp.mongodb.net/test1?retryWrites=true&w=majority"
);

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
