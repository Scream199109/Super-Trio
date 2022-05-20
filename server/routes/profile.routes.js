const router = require('express').Router();
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    User.findAll()
      .then((allUsers) => res.json(allUsers))
      .catch((error) => console.log(error));
  });

module.exports = router;

// if (req.session.User) {
//   const { id } = req.session.User;
//   const user = await User.findOne({ where: { id }, raw: true });

// } else {
//   return res.redirect('/');
// }
