const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserDB = require("./models/UserModel");
const jwt = require("jsonwebtoken");
const axios = require("axios");

require("dotenv").config(); 
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;
const secretKey = process.env.SECRET_KEY;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & Server running on PORT 3001`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required!",
        status: false,
      });
    }

    const existingUser = await UserDB.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: `Email ${email} already exists!`,
        status: false,
      });
    }

    const newUser = new UserDB({
      email,
      password,
      name,
    });

    await newUser.save();

    res.status(200).json({
      status: true,
      title: "Registered Successfully.",
      message: `User ${name} created Successfully`,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong!",
      status: false,
    });
  }
});






// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required!",
        status: false,
      });
    }

    const user = await UserDB.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
        status: false,
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Incorrect password!",
        status: false,
      });
    }
    console.log(user);
    console.log("Before token generation");
    const token = jwt.sign({ userId: user._id }, secretKey);
    console.log(token);
    console.log("After token generation");
    res.status(200).json({
      status: true,
      message: "Login successful!",
      userData: {
        email: user.email,
      },
      token,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong!",
      status: false,
    });
  }
});
