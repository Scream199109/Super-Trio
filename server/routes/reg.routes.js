const router = require('express').Router();
const bcrypt = require('bcrypt');
const { user } = require('../db/models');
// const auth = require('../middleware/authChecker');

router.route('/')
  .get((req, res) => {
    res.render('reg');
  })
  .post(async (req, res) => {
    const {
      name, email, password, role,
    } = req.body;
    const thisUser = await user.findOne({ where: { email } });
    if (!thisUser && role === 'manager') {
      await user.create({
        name,
        email,
        password: (await bcrypt.hash(password, 10)),
        roleManager: true,
        roleDirector: false,
      });
      const thisUser1 = await user.findOne({ where: { email } });
      req.session.user = thisUser1;
      res.redirect('/');
    } else if (!thisUser && role === 'director') {
      await user.create({
        name,
        email,
        password: (await bcrypt.hash(password, 10)),
        roleManager: false,
        roleDirector: true,
      });
      const thisUser1 = await user.findOne({ where: { email } });
      req.session.user = thisUser1;
      res.redirect('/');
      // res.sendStatus(400);Рег
    }
  });

module.exports = router;
