const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// // // /api/auth/register           registration
router.post(
  "/auth/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимальная длина пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректный данные при регистрации",
        });
      }

      const { email, password, firstName, lastName } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
      });

      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
);

// /api/auth/login           registration
router.post("/auth/login", async (req, res) => {
  res.json({
    asljasiojf: "/login",
  });
});

router.get("/q", (req, res) => {
  res.json({
    hello: "hi+-___{q}!",
  });
});

module.exports = router;
