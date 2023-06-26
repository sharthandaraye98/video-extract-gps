// import controller
const gpsDataController = require("../controllers/gpsDataController");

// router
const router = require("express").Router();

// use routers
router.post("/addVideo", gpsDataController.upload, gpsDataController.addVideo);

module.exports = router;
