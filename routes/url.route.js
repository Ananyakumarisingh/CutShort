const express = require("express");
const router = express.Router();
const controller = require("../controllers/url.controller");

// ! POST
router.post("/", controller.generateNewShortURL);

// ! GET
router.get("/:shortid", controller.fetchShortURL);

// // ! GET
// router.get("/:shortid", controller.getShortURL);


module.exports = router;