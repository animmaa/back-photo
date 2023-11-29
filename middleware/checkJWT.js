const jwt = require('jsonwebtoken');

const checkJwt = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(402).json({ messageError: 'pas de token' });
  }

  const authHeader = req.headers.authorization;

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ messageError: 'token invalide' });
  }

  try {
    jwt.verify(token, process.env.SECRETE_KEY);
    return next();
  } catch (error) {
    return res.status(401).json({ messageError: 'echec verification token' });
  }
};

module.exports = checkJwt;
