const connectDB = require("./db/connect.js");
const express = require("express");
const tasksRouter = require("./routes/tasks.js");
const notFound = require("./middleware/not-found.js");
const app = express();

// middleware
app.use(express.static('./public'))

app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);
app.use(notFound)

const port = 3000;

const start = async (params) => {
  try {
    await connectDB();
    console.log("Connected to DB...");
    app.listen(port, () => console.log("Server is running at port 3000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
