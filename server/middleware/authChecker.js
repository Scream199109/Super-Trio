const authChecker = (req, res, next) => {
  if (req.session.user && req.path.startsWith('/auth/')) {
    return res.redirect('/');
  }
  return next();
};
module.exports = authChecker;
