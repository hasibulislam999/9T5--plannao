const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const transactionSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    transactionInfo: [
      {
        transactionId: {
          type: String,
          uppercase: true,
          unique: true,
          required: [true, "Transaction ID must be required"],
          minLength: [10, "Transaction ID would be exactly 10 characters"],
          maxLength: [10, "Transaction ID would be exactly 10 characters"],
        },
        package: {
          type: ObjectId,
          ref: "Package",
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Transaction = new mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
