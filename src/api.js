const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
