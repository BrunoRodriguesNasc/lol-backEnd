const express = require("express");
const router = express.Router();

const championController = require("../controller/championController");


router.get("/", championController.list);

module.exports = router;