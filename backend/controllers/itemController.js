const Item = require("../models/Item");

// CREATE ITEM (Lost / Found)
exports.createItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      postedBy: req.user,
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL ITEMS
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate("postedBy", "name email phone")
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ITEMS BY STATUS (lost / found)
exports.getItemsByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    if (!["lost", "found"].includes(status)) {
      return res.status(400).json({ message: "Invalid item status" });
    }

    const items = await Item.find({ status })
      .populate("postedBy", "name email phone")
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};