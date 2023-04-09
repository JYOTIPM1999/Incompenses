const UserModel = require("../models/User.Schema");

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;

  const exitsUser = await UserModel.findOne({ email });

  if (exitsUser) {
    res.status(200).send("User already signedup");
  }
  try {
    const hashed = await argon2.hash(password);
    const User = await UserModel.create({
      name,
      email,
      password: hashed,
    });
    await User.save();
    res.send("New User signedup");
  } catch (error) {
    res.send(error);
  }
  console.log(name, email, password);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await argon2.verify(user.password, password))) {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "5 mins" }
    );
    const refreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "7 days",
      }
    );
    res
      .status(200)
      .send({ message: "Email & password matched", token, refreshToken });
  } else {
    res.status(401).send("Invalid email or password");
  }
};

module.exports = { registerUser, loginUser };
