const { Card, Topic } = require('../db/models');

class CardController {
  async postAllCard(req, res) {
    const allTopic = await Topic.findAll();
    const allCard = await Card.findAll();

    res.status(200).json({ allCard });
  }

  async postAllTopic(req, res) {
    const allTopic = await Topic.findAll();

    res.status(200).json({ allTopic });
  }
}

module.exports = new CardController();
