var jwt = require("jsonwebtoken");
const JWT_SECRET = "pankajisgoodboy";

const fetchuser = (req, res, next) => {
  // Extract token from the 'auth-token' header
  const token = req.header("auth-token");
  if (!token) {
    console.log('No token provided');
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    // Verify the token using the secret key
    const data = jwt.verify(token, JWT_SECRET);
    
    // Attach the decoded user data to the request object
    req.user = data.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid token or any other errors during verification
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
