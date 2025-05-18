import express from "express";
import Contact from "../models/usermodel.js";  

const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, email, message });  
    await contact.save();

    res.status(201).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
