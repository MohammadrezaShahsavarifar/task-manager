const express = require("express");
const dotenv = require("dotenv");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const taskRouter = require("./routes/tasks");

const app = express();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", taskRouter);
app.use(errorHandlerMiddleware);

app.use(notFound);
module.exports = app;
