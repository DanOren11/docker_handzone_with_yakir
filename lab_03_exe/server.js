const express = require("express");
const app = express();
const log4js = require("log4js");
log4js.configure({
  appenders: { myapp: { type: "file", filename: "logs/myapp.log" } },
  categories: { default: { appenders: ["myapp"], level: "debug" } },
});

require("dotenv").config();
const port = process.env.PORT || 3000;
const containerId = process.env.CONTAINER_ID || "unknow";
app.get("/health", (req, res) => {

  const logEntery = {
    "message": "Health check called",
    "containerId": containerId,
    "timestamp": new Date().toISOString()
  }
  logger.debug(logEntery);
  res.json(getHealth());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const logger = log4js.getLogger();
const getHealth = () => {
  return {
    status: "OK",
    uptime: process.uptime(),
    timestamp: Date.now().toLocaleString(),
  };
};
