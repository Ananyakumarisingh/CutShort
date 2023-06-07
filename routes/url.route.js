const express = require("express");
const router = express.Router();
const controller = require("../controllers/url.controller");


router.post("/", controller.generateNewShortURL);


module.exports = router;