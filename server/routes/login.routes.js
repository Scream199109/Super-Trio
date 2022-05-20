const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { email, password } = req.body;
    const thisUser = await User.findOne({ where: { email } });
    if (thisUser && await bcrypt.compare(password, thisUser.password)) {
      req.session.User = thisUser;
    } else {
      res.send('error');
    }
  });

module.exports = router;
