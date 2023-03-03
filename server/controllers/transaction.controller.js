/* internal import */
const transactionService = require("../services/transaction.service");

/* display all transactions */
exports.displayAllTransactions = async (req, res, next) => {
  try {
    const result = await transactionService.displayAllTransactions(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching all transactions",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* insert new transaction */
exports.insertNewTransaction = async (req, res, next) => {
  try {
    const result = await transactionService.insertNewTransaction(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully insert new transaction",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific transaction */
exports.displaySpecificTransaction = async (req, res, next) => {
  try {
    const result = await transactionService.displaySpecificTransaction(req.params.id);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific transaction",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific transaction */
exports.removeSpecificTransaction = async (req, res, next) => {
  try {
    const result = await transactionService.removeSpecificTransaction(req.params.id);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific transaction",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
