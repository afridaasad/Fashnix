/*
Purpose: Create initial admin user
Run Once: node utils/seedAdmin.js
*/

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const existingAdmin = await User.findOne({ email: "admin@fashnix.com" });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await User.create({
      name: "Admin",
      email: "admin@fashnix.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
