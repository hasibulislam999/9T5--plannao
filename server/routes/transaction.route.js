/* external import */
const express = require("express");

/* internal import */
const transactionController = require("../controllers/transaction.controller");
const authorizedRoleMiddleware = require("../middlewares/authorizedRole.middleware");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");

/* router level connection */
const router = express.Router();

router
  .route("/")
  .get(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin"),
    transactionController.displayAllTransactions
  )
  .post(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("user", "admin"),
    transactionController.insertNewTransaction
  );

router
  .route("/:id")
  .get(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin", "user"),
    transactionController.displaySpecificTransaction
  )
  .delete(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin"),
    transactionController.removeSpecificTransaction
  );

module.exports = router;
