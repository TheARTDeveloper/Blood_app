const express = require("express");
const {
  bloodHandller,
  getDoner,
} = require("../Controllers/bloodController.jsx");
const router = express.Router();

//login route
router.post("/add-doner", bloodHandller);
router.get("/get-doner", getDoner);

module.exports = router;
