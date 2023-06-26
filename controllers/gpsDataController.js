const db = require("../models");
const exifr = require("exifr");
const path = require("path");

// video upload
const multer = require("multer");

//create main model
const GPSData = db.gpsData;

// upload video controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Videos"); // Destination folder for video uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: "100000000" }, // Adjust the file size limit as needed
  fileFilter: (req, file, cb) => {
    const fileTypes = /mp4/; // Allow only MP4 format
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Only MP4 format files are allowed");
  },
}).single("video");

const addVideo = async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileExtension = path.extname(filePath);

    if (fileExtension.toLowerCase() !== ".mp4") {
      throw new Error("Invalid file format. Please upload an MP4 file.");
    }
    const gpsData = await exifr.gps(filePath);
    res.json({ gpsData });
  } catch (error) {
    console.error("Failed to extract GPS information:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  upload,
  addVideo,
};
