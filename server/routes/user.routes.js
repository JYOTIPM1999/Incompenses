const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.Controller");

const app = express.Router();

app.post("/signup", registerUser);
app.post("/login", loginUser);

module.exports = app;
