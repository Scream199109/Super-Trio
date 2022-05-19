const { Card } = require('../db/models');

class UserController {
  async renderKabinet(req, res) {
    try {
      const { user } = req.session;
      const allUserCard = await Card.findAll({ where: { user_id: user.id } });
      res.render('kabinet', { user, allUserCard });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async renderAddCard(req, res) {
    try {
      const { user } = req.session;
      res.render('addCard', { user });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async addCard(req, res) {
    try {
      const { user } = req.session;
      const {
        title, text, dateStart, dateEnd,
      } = req.body;
      await Card.create({
        title,
        text,
        dateStart,
        dateEnd,
        user_id: user.id,
      });
      res.status(200).json({ message: 'Товар добавлен' });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async renderUpdateCard(req, res) {
    try {
      const { user } = req.session;
      const { id } = req.params;
      const changeCard = await Card.findOne({ where: { id } });

      res.render('updateCard', { user, changeCard });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async updateCard(req, res) {
    try {
      // const { user } = req.session;
      const {
        title, text, dateStart, dateEnd, id,
      } = req.body;

      const updateCard = await Card.findOne({ where: { id } });
      console.log('🚀 ~ UserController ~ updateCard ~ updateCard', updateCard);
      await updateCard.update({
        title,
        text,
        dateStart,
        dateEnd,
      });
      res.status(200).json({ message: 'Успешно обновлено' });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }

  async deleteCard(req, res) {
    try {
      const { user } = req.session;
      const {
        delId,
      } = req.body;
      const deleteCard = await Card.findOne({ where: { id: delId } });
      await deleteCard.destroy();
      res.status(200).json({ message: 'Товар удален' });
    } catch (err) {
      if (err) {
        res.status(400).json({ message: 'Error, try later', err });
      }
    }
  }
}

module.exports = new UserController();
