const router = require('express').Router();

router
  .get('/', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/error');
      }
      return res.clearCookie('user_uid').json({ message: 'Done' });
    });
  });

module.exports = router;
