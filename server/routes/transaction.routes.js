const express = require("express");
const {
  saveNewTransaction,
  getAllTransaction,
} = require("../controllers/transaction.Controller");
const authMiddleware = require("../middleware/auth.middleware");

const app = express.Router();
app.use(authMiddleware);
app.post("/save", saveNewTransaction);
app.get("/getData", getAllTransaction);

module.exports = app;
