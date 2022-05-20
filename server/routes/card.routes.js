const router = require('express').Router();
const controller = require('../controllers/cardController');

router
  .get('/cards', controller.postAllCard)
  .get('/topic', controller.postAllTopic);

module.exports = router;
