const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/error');
    }
    res.clearCookie('user_sid');
    return res.redirect('/');
  });
});

module.exports = router;
