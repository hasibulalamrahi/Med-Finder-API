const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const signUpSchema = require("../../Schemas/signUpSchema");
const UserSignUp = new mongoose.model("UserSignUp", signUpSchema);

//Post An Item
router.post("/", async (req, res) => {
  try {
    const data = await UserSignUp(req.body).save();
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "There was a server side error",
    });
  }
});

module.exports = router;
