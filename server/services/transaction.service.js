/* internal import */
const Package = require("../models/Package");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

/* display all transactions */
exports.displayAllTransactions = async (query) => {
  const result = await Transaction.find(query)
    .sort("-createdAt")
    .populate([
      {
        path: "user",
        select: "",
      },
      {
        path: "transactionInfo.package",
        select: "",
      },
    ]);
  return result;
};

/* insert new transaction */
exports.insertNewTransaction = async (data) => {
  let result;
  const transaction = await Transaction.findOne({ user: data.user });
  if (transaction) {
    result = await Transaction.findByIdAndUpdate(
      transaction._id,
      {
        $push: {
          transactionInfo: data.transactionInfo,
        },
      },
      {
        runValidators: true,
      }
    );
  } else {
    result = await Transaction.create(data);
    await User.findByIdAndUpdate(data.user, {
      $set: {
        transaction: result._id,
      },
    });
  }

  await Package.findByIdAndUpdate(data.transactionInfo.package, {
    $push: { users: result.user },
  });

  return result;
};

/* display specific transaction */
exports.displaySpecificTransaction = async (id) => {
  const result = await Transaction.findById(id).populate([
    {
      path: "user",
      select: "",
    },
    {
      path: "transactionInfo.package",
      select: "",
    },
  ]);
  return result;
};

/* remove specific transaction */
exports.removeSpecificTransaction = async (id) => {
  const result = await Transaction.findByIdAndDelete(id);

  result.transactionInfo.forEach(
    async (transaction) =>
      await Package.findByIdAndUpdate(transaction.package, {
        $pull: { users: result.user },
      })
  );

  await User.findByIdAndUpdate(result.user, {
    $unset: {
      transaction: 1,
    },
  });

  return result;
};

/**
 * How to delete a field from a document in Mongoose
 * https://attacomsian.com/blog/mongoose-delete-field
 */
