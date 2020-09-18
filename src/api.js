const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const test = require("../models/test");

const app = express();
app.use(cors());
const router = express.Router();

// /api/auth/register           registration
router.get("/auth/register", async (req, res) => {
  res.json({
    asljasiojf: "/register",
  });
});

// /api/auth/login           registration
router.post("/auth/login", async (req, res) => {
  res.json({
    asljasiojf: "/login",
  });
});

router.get("/", async (req, res) => {
  // const testUser = new test({ name: "testmessage" });
  // await testUser.save();
  // const arr = await test.find({});
  // res.json({
  //   asljasiojf: "asdsadsad",
  //   asljasiojf1: "asdsadsad",
  //   asljasiojf2: "asdsadsad",
  //   asljasioj1f: "asdsadsad",
  //   asljasi2ojf: "asdsadsad",
  //   asl2jasiojf: "asdsadsad",
  //   arr: arr,
  // });
  res.json({
    asljasiojf: "/",
  });
});

mongoose.connect(
  "mongodb+srv://cb8593bc:Racing-Bike-2000@cluster0.kmhay.gcp.mongodb.net/test1?retryWrites=true&w=majority"
);

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
