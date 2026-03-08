import express from "express";
import UserModel from "../models/userModel";
import { hashPassword, compareHash } from "../lib/helper";
import authToken from "../middlware";

const router = express.Router();

/** Check if user has a PIN set */
router.get("/pin/status", authToken, async (req, res) => {
  try {
    const userId = (req as any).userId;
    const user = await UserModel.findById(userId).select("pin");
    return res.json({ hasPin: !!user?.pin });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

/** Set or update PIN (requires auth) */
router.post("/pin/set", authToken, async (req, res) => {
  try {
    const userId = (req as any).userId;
    const { pin } = req.body;

    if (!pin || typeof pin !== "string" || !/^\d{4}$/.test(pin)) {
      return res.status(400).json({ message: "PIN must be 4 digits" });
    }

    const hashedPin = hashPassword(pin);
    await UserModel.findByIdAndUpdate(userId, { pin: hashedPin });

    return res.json({ success: true, message: "PIN set successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

/** Reset PIN (requires current password) */
router.post("/pin/reset", authToken, async (req, res) => {
  try {
    const userId = (req as any).userId;
    const { password, newPin } = req.body;

    if (!password || !newPin || typeof newPin !== "string" || !/^\d{4}$/.test(newPin)) {
      return res.status(400).json({ message: "Password and 4-digit PIN required" });
    }

    const user = await UserModel.findById(userId);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const validPassword = compareHash(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const hashedPin = hashPassword(newPin);
    await UserModel.findByIdAndUpdate(userId, { pin: hashedPin });

    return res.json({ success: true, message: "PIN reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

/** Verify PIN */
router.post("/pin/verify", authToken, async (req, res) => {
  try {
    const userId = (req as any).userId;
    const { pin } = req.body;

    if (!pin || typeof pin !== "string" || !/^\d{4}$/.test(pin)) {
      return res.status(400).json({ message: "PIN must be 4 digits" });
    }

    const user = await UserModel.findById(userId).select("pin");
    if (!user?.pin) {
      return res.status(400).json({ message: "No PIN set. Create one first." });
    }

    const isValid = compareHash(pin, user.pin);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid PIN" });
    }

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
