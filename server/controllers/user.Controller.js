const UserModel = require("../models/User.Schema");

const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  const exitsUser = await UserModel.findOne({ email });

  if (exitsUser) {
    res.status(200).send("User already signedup");
  } else {
    const User = await UserModel.create({
      name,
      email,
      password,
    });
    await User.save();
    res.send("New User signedup");
  }
  console.log(name, email, password);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && password === user.password) {
    res.status(200).send("Email & password matched");
  } else {
    res.status(401).send("Invalid email or password ");
  }
  console.log(email, password);
};

module.exports = { registerUser, loginUser };
