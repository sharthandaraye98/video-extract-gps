module.exports = (sequelize, DataTypes) => {
  const GPSData = sequelize.define("gpsData", {
    Hour: {
      type: DataTypes.INTEGER,
    },
    Minute: {
      type: DataTypes.INTEGER,
    },
    Second: {
      type: DataTypes.INTEGER,
    },
    Year: {
      type: DataTypes.INTEGER,
    },
    Month: {
      type: DataTypes.INTEGER,
    },
    Day: {
      type: DataTypes.INTEGER,
    },
    Status: {
      type: DataTypes.STRING,
    },
    NSInd: {
      type: DataTypes.STRING,
    },
    EWInd: {
      type: DataTypes.STRING,
    },
    Reservd: {
      type: DataTypes.STRING,
    },
    Latitude: {
      type: DataTypes.FLOAT,
    },
    Longitude: {
      type: DataTypes.FLOAT,
    },
    Speed: {
      type: DataTypes.FLOAT,
    },
    Angle: {
      type: DataTypes.FLOAT,
    },
  });

  return GPSData;
};
