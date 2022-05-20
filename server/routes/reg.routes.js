const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
// const auth = require('../middleware/authChecker');
const saltRounds = 7;
router.route('/')
  .get((req, res) => {
    res.render('reg');
  })
  .post(async (req, res) => {
    const {
      name, email, password,
    } = req.body;
    const thisUser = await User.findOne({ where: { email } });
    if (thisUser) {
      res.status(401).json({
        text: 'Такой пользователь уже существует',
      });
    } else {
      await User.create({
        name,
        email,
        password: (await bcrypt.hash(password, saltRounds)),
        score: 0,
      });
      req.session.user = thisUser;
      req.session.uid = thisUser.id;
      res.redirect('/home');
    }
  });

module.exports = router;
