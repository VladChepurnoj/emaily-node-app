if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

//CLIENT_ID=401308809255-pt4ussnvlpnm4d7bhbp6tn6pfvj02n4k.apps.googleusercontent.com
//CLIENT_SECRET=9Wav9t_Ie9Q2bo-oIrFNvip1
