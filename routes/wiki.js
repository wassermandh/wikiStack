const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { db, User, Page } = require('../models/index');

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.pageContent;
  const status = req.body.pageStatus;
  const slug = createSlug(title)
    .split(' ')
    .join('_');

  const page = new Page({
    title,
    content,
    status,
    slug,
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;

function createSlug(title) {
  if (!title) {
    return slugGenerator(10);
  }

  return title.replace(/\W/g, '');
}

function slugGenerator(length) {
  let result = '';
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    let idx = Math.floor(Math.random() * characters.length);
    result += characters[idx];
  }

  return result;
}
