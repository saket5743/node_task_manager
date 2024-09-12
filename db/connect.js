const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://user:root1234@cluster0.rmel4sd.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
