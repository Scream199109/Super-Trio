const signUpCheck = (req, res, next) => {
  if (req.session?.user?.id) {
    res.locals.isAuthorized = true;
  } else {
    res.locals.isAuthorized = false;
  }
  next();
};

module.exports = signUpCheck;
