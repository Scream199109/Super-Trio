const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
// const auth = require('../middleware/authChecker');

router.route('/')
  .get((req, res) => {
    res.render('reg');
  })
  .post(async (req, res) => {
    const {
      name, email, password,
    } = req.body;
    const thisUser = await User.findOne({ where: { email } });
    if (!thisUser) {
      await User.create({
        name,
        email,
        password: (await bcrypt.hash(password, 10)),
        score: 200,
      });
    } else {
      res.json({ message: 'сущ' });
      // res.sendStatus(400);Рег
    }
  });

module.exports = router;
