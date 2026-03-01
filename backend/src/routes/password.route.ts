import express from 'express'
import passwordModel from '../models/passowordModel'
import { generateKeyAndEncript } from '../lib/helper'
import authToken from '../middlware'

const router=express.Router()



router.post('/password', authToken, async (req, res) => {
  try {
    const { username, platform_name, password, email, notes } = req.body;
    const userId = (req as any).userId;

    if (!username || !platform_name || !password || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const exists = await passwordModel.findOne({
      platform_name,
      userId
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: 'Password already exists'
      });
    }

    const { hexkey, encriptedPass } =
      generateKeyAndEncript(password);

    const pass = new passwordModel({
      username,
      platform_name,
      password: encriptedPass,
      key: hexkey,
      email,
      notes,
      userId
    });

    await pass.save();

    return res.status(200).json({
      success: true,
      message: 'Password registered successfully',
      data: pass
    });

  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});