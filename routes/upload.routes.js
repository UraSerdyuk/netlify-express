const { Router } = require("express");
var multer = require("multer");
var fs = require("file-system");
const router = Router();

// var upload = multer({ dest: "uploads/" });
//  /api/upload/img

router.post("/img", function (req, res) {
  console.log("req.file", req);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

router.get("/img", (req, res) => {
  // fs.writeFile("uploads/test.txt", "some ", function (err) {});
  res.json({
    hello: "img+-___{}!",
  });
});

module.exports = router;
