const CatModel = require("../models/catModel");

const listCats = async (req, res) => {
  try {
    const data = await new CatModel({}).listCats();
    res.json({ statusCode: 200, data, message: "success" });
  } catch (err) {
    console.log("Unexpected error happened:", err.message);
    res.json({ statusCode: 400, err: err.message, message: "faild" });
  }
};

const createCat = async (req, res) => {
  try {
    const cat = await new CatModel(req.body).createCat();
    res.json({ statusCode: 200, message: "success" });
  } catch (err) {
    console.log("Unexpected error happened:", err.message);
    res.json({ statusCode: 400, err: err.message, message: "faild" });
  }
};

module.exports = { createCat, listCats };
