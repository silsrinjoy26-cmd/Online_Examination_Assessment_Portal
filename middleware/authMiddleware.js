const jwt = require('jsonwebtoken');

module.exports = (roles = []) => {
  return (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied: Security token missing.' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden: Insufficient portal privileges.' });
      }
      next();
    } catch (ex) {
      res.status(400).json({ message: 'Access Denied: Invalid security token.' });
    }
  };
};