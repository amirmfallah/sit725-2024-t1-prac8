const express = require("express");
const catRouter = express.Router();
const catController = require("../controllers/catController");

catRouter.get("/", catController.listCats);

catRouter.post("/", catController.createCat);

module.exports = catRouter;
