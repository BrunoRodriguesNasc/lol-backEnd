const express = require("express");
const router = express.Router();

const championController = require("../controller/championController");


router.get("/", championController.list);
router.get("/:name", championController.getByName);

module.exports = router;