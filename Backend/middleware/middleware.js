import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    alert("Token missing! Please login again.");
    return;
  }

  try {
    const decoded = jwt.verify(token, "secret_ecom");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token." });
  }
};

export default authmiddleware;
