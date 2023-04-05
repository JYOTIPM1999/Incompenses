const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const transactionRouter = require("./routes/transaction.routes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/transcation", transactionRouter);

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server started on port no ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
