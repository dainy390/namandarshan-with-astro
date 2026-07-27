

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserModel = require("../api/models/User.js");

const EMAILS = [
  "tiwariindra008@gmail.com",
  "mramakant860@gmail.com",
  "sharmahimanshu25002@gmail.com",
  "dixitenterprises6@gmail.com",
  "suryaprakashu6@gmail.com",
];

const NEW_PASSWORD = "Astro@123";

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not set in backend/.env");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB.\n");

  const hash = await bcrypt.hash(NEW_PASSWORD, 10);

  for (const email of EMAILS) {
    const user = await UserModel.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      { $set: { password: hash } },
      { new: true }
    );

    if (user) {
      console.log(`Password reset for: ${email}`);
    } else {
      console.log(`No user found for: ${email} (skipped)`);
    }
  }

  console.log("\nAll accounts can now log in with password: " + NEW_PASSWORD);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
