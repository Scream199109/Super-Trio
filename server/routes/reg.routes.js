const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
// const auth = require('../middleware/authChecker');
const saltRounds = 7;
router.route('/')
  .post(async (req, res) => {
    const {
      name, email, password,
    } = req.body;
    const thisUser = await User.findOne({ where: { email } });
    if (thisUser) {
      res.status(404).json({
        error: 'Такой пользователь уже существует',
      });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: (await bcrypt.hash(password, saltRounds)),
        score: 0,
      });

      req.session.user = newUser;
      req.session.uid = newUser.id;
      res.status(200).json(newUser);
    }
  });

module.exports = router;
