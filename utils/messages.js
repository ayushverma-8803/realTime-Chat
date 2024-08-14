// dependencies
const moment = require("moment-timezone");
require("moment-timezone/data/packed/latest.json");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().tz("Asia/Kolkata").format("h:mm a"),
  };
}

module.exports = formatMessage;
