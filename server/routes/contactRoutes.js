import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("📥 Incoming Data:", { name, email, message });

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log("✅ Saved to DB");
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    res.status(500).json({ error: "Failed to store message" });
  }
});

export default router;
