const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");
const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
const router = express.Router();

app.use("/.netlify/functions/api/auth", require("../routes/auth.routes"));
app.use("/.netlify/functions/api/upload", require("../routes/upload.routes"));

router.get("/", (req, res) => {
  res.json({
    hello: "hi+-___{}!",
  });
});

mongoose.connect(config.get("mongoUri"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
