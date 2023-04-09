const authMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    console.log(e.message);
    return res.status(401).send("Token is invalid");
  }
};
module.exports = authMiddleware;
