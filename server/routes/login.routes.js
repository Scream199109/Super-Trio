const router = require('express').Router();
const bcrypt = require('bcrypt');
const { user } = require('../db/models');

router.route('/')
  .get((req, res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>')
    res.render('login');
  })

  .post(async (req, res) => {
    const { email, password } = req.body;
    const thisUser = await user.findOne({ where: { email } });
    if (thisUser && await bcrypt.compare(password, thisUser.password)) {
      req.session.user = thisUser;
      res.redirect('/');
    } else {
      res.send('error');
    }
  });

module.exports = router;
