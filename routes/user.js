const express = require('express');
const userList = require('../views/userList');
const userPages = require('../views/userPages');
const router = express.Router();
const { User, Page } = require('../models/index');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const pages = await Page.findAll({
      where: {
        AuthorId: req.params.id,
      },
    });
    const author = await Page.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(userPages(author, pages));
  } catch (error) {
    next(error);
  }
});
