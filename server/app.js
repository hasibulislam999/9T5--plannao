/**
 * Title: Initial segment of this project
 * Description: All application level tasks execute here
 * Author: Hasibul Islam
 * Date: 23/10/2022
 */

/* external imports */
const express = require("express");
const cors = require("cors");

/* internal imports */
const errorHandlerMiddleware = require("./middlewares/errorHandler.middleware");

/* router level imports */
const userRoute = require("./routes/user.route");
const packageRoute = require("./routes/package.route");
const transactionRoute = require("./routes/transaction.route");

/* application level connections */
const app = express();

/* middlewares connections */
app.use(
  cors({
    origin: "https://client.plannao.com",
    methods: "GET,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/* router level connections */
app.use("/user", userRoute);
app.use("/package", packageRoute);
app.use("/transaction", transactionRoute);

/* global error handlers */
app.use(errorHandlerMiddleware);

/* enable connection */
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Connection Successful",
      description: "Successfully establishing PlanNao connection",
    });
  } catch (error) {
    res.status(204).json({
      acknowledgement: false,
      message: error.name,
      description: error.message,
    });
  }
});

/* export application */
module.exports = app;
