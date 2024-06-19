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
    // Use req.params.id instead of req.body.id
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // Remove the image file associated with the food item
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.log("Error deleting file:", err);
    });

    await foodModel.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      message: "Food Removed",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { addFood, listFood, removeFood };
