const mongoose = require("mongoose");
const url =
  "mongodb+srv://sharmaaman29999:YQEcM15sKyMSQjab@cluster0.xkxtaeb.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0";
const connect = mongoose.connect(url, { useNewUrlParser: true });
module.exports = connect;
