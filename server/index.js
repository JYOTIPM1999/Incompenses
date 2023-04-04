const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const URL =
  process.env.URL ||
  "mongodb+srv://jyotipm1999:jyotipm1999@cluster0.i33ampy.mongodb.net/test";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => res.send("hello express"));

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server started on port 8085");
    });
  })
  .catch((err) => {
    console.log("error occured");
  });
