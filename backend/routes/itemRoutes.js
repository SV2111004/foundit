const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createItem,
  getAllItems,
  getItemsByStatus,
} = require("../controllers/itemController");

const router = express.Router();

// CREATE (JWT REQUIRED)
router.post("/", authMiddleware, createItem);

// GET ALL (PUBLIC)
router.get("/", getAllItems);

// GET LOST OR FOUND
router.get("/:status",getItemsByStatus);

module.exports = router;
