const foodModel = require("../models/foodModel.js");
const fs = require("fs");

//add food item
const addFood = async (req, res) => {
  const { name, description, price, image, category } = req.body;

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name,
    description,
    price,
    category,
    image: image_filename,
  });

  try {
    await food.save();
    return res.json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    console.log(error);
  }
  res.json({
    success: false,
    message: "Error",
  });
};

//all food list

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    return res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: "Error",
    });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    return res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

module.exports = { addFood, listFood, removeFood };
