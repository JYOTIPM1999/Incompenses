const express = require("express");
const {
  saveNewTransaction,
  getAllTransaction,
} = require("../controllers/transaction.Controller");

const app = express.Router();

app.post("/save", saveNewTransaction);
app.get("/getData", getAllTransaction);

module.exports = app;
