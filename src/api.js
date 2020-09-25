const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const router = express.Router();

app.use(express.json({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "public")));

app.use("/.netlify/functions/api/auth", require("../routes/auth.routes"));
// app.use("/.netlify/functions/api/upload", require("../routes/upload.routes"));

router.get("/", (req, res) => {
  res.json({
    hello: "",
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
