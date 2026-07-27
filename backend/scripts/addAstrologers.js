

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const UserModel = require("../api/models/User.js");
const PanditProfileSchema = require("../api/models/PanditProfile.js");

const PanditProfile =
  mongoose.models.PanditProfile || mongoose.model("PanditProfile", PanditProfileSchema);


const ASTROLOGERS = [
  {
    name: "Yogendra Tiwari",
    email: "tiwariindra008@gmail.com",
    mobile: "9987938719",
    dob: "1993-07-05",
    gender: "Male",
  },
  {
    name: "Ramakant Mishra",
    email: "mramakant860@gmail.com",
    mobile: "6260073377",
    dob: "1995-05-10",
    gender: "Male",
  },
  {
    name: "Himanshu",
    email: "sharmahimanshu25002@gmail.com",
    mobile: "9625674520",
    dob: "2005-07-16",
    gender: "Male",
  },
  {
    name: "Nilakantha Dixit",
    email: "dixitenterprises6@gmail.com",
    mobile: "6370338797",
    dob: "1955-05-05",
    gender: "Male",
  },
  {
    name: "Surya Prakasa Rao T",
    email: "suryaprakashu6@gmail.com",
    mobile: "8125302719",
    dob: "1995-06-06",
    gender: "Male",
  },
];

const DEFAULTS = {
  expertise: "Vedic Astrology",
  bio: "Experienced astrologer offering guidance on life, career, and relationships.",
  languages: ["Hindi", "English"],
  modes: ["chat", "call"],
  pricePerMinute: 13,
  experienceYears: 1,
  status: "offline", // they can flip to "online" once ready to take calls
};

function generateTempPassword() {
  return crypto.randomBytes(6).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 10);
}

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI is not set. Set it in backend/.env or pass it inline.");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB.\n");

  const credentials = [];

  for (const astro of ASTROLOGERS) {
    const email = astro.email.toLowerCase().trim();
    const tempPassword = generateTempPassword();
    const passwordHash = await bcrypt.hash(tempPassword, 10);

    let user = await UserModel.findOne({ email });
    if (user) {
      user.name = astro.name;
      user.role = "astrologer";
      await user.save();
      console.log(`User already existed, role set to astrologer: ${email}`);
    } else {
      user = await UserModel.create({
        name: astro.name,
        email,
        password: passwordHash,
        role: "astrologer",
        authProvider: "local",
      });
      credentials.push({ email, tempPassword });
      console.log(`Created new astrologer user: ${email}`);
    }

    await PanditProfile.findOneAndUpdate(
      { userId: user._id },
      {
        $set: {
          userId: user._id,
          email,
          displayName: astro.name,
        },
        $setOnInsert: {
          expertise: DEFAULTS.expertise,
          bio: DEFAULTS.bio,
          languages: DEFAULTS.languages,
          modes: DEFAULTS.modes,
          pricePerMinute: DEFAULTS.pricePerMinute,
          experienceYears: DEFAULTS.experienceYears,
          status: DEFAULTS.status,
          isActive: true,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log(`Pandit profile ready for: ${astro.name} (${email})\n`);
  }

  console.log("---------------------------------------------");
  console.log("Done. Temporary login passwords (new users only):");
  credentials.forEach((c) => console.log(`  ${c.email} -> ${c.tempPassword}`));
  console.log("---------------------------------------------");
  console.log(
    "Share these with each astrologer so they can log in, set expertise/bio/price,\n" +
    "upload a photo, and switch their status to 'online' from the Pandit Dashboard."
  );

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
