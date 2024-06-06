const express = require("express");
const app = express();
const router = require("./Routers/bloodRoute.jsx");
const cors = require("cors");
const createError = require("http-errors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { mongodbLocal, mongodbGlobal } = require("./secret.jsx");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["post", "get"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// mongodb database connect//
const mongoose = require("mongoose");
try {
  mongoose.connect(mongodbGlobal);
  console.log("mongo DB connetcion successfull");

  mongoose.connection.on("error", (error) => {
    console.error("DB connetion Error: ", error);
  });
} catch (error) {
  console.error(error);
}

// mongodb database connect//

app.use("/", router);

//client error handling
app.use((req, res, next) => {
  next(createError(401, "Route not found"));
});

// server error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
