const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Income", "Expense"],
    default: "Expense",
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  mode: {
    type: String,
    required: true,
    enum: ["Account", "Card", "Cash"],
    default: "Cash",
  },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});

const TransactionModel = ("transaction", TransactionSchema);
module.exports = TransactionModel;
