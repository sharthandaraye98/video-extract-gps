const express = require("express");
const app = express();

// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
const router = require("./routes/gpsDataRouter.js");
app.use("/api/gpsData", router);

// static video folder
app.use("/Videos", express.static("./Videos"));

// port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
