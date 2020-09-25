const { Router } = require("express");
var fs = require("file-system");
const { regType } = require("../utils/constants");
const Image = require("../models/Image");
const User = require("../models/User");
const router = Router();

//  /api/upload/img
router.post("/img", async (req, res) => {
  try {
    const data = JSON.parse(req.body.toString());
    //create folder
    const dir = `uploads/${data.userId}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const filepath = `uploads/${data.userId}/${[data.name]}`;
    console.log("filepath", filepath);
    const dataNew = data.base64.replace(regType[data.base64Type], "");
    const buf = new Buffer(dataNew, "base64");
    fs.writeFileSync(filepath, buf, (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!");
    });

    // const links = await User.findById(data.userId);

    // console.log("OWNER", links);

    const image = new Image({
      href: filepath,
      name: data.name,
      owner: data.userId,
    });

    await image.save();

    res.status(201).json({ image });
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/img", async (req, res) => {
  try {
    const links = await Image.find({ owner: "5f6a69c127b3f2292c2f6380" });
    res.json(links);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
