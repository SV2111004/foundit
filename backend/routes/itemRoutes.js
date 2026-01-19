const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createItem,
  getAllItems,
  getItemsByStatus,
  deleteItem,
} = require("../controllers/itemController");


const router = express.Router();

// CREATE (JWT REQUIRED)
const upload = require("../middleware/upload");

router.post(
  "/",
  authMiddleware,
  upload.single("image"), // optional image
  createItem
);


// GET ALL (PUBLIC)
router.get("/", getAllItems);

// GET LOST OR FOUND
router.get("/:status",getItemsByStatus);

// DELETE ITEM (ONLY OWNER)
router.delete("/:id", authMiddleware, deleteItem);


module.exports = router;
