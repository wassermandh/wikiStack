const express = require('express');
const morgan = require('morgan');
const app = express();
const {
  addPage,
  editPage,
  index,
  layout,
  main,
  userList,
  userPages,
  wikipage,
} = require('./views');
const { db, Page } = require('./models/index');
const userRoute = require('./routes/user');
const wikiRoute = require('./routes/wiki');

db.authenticate().then(() => {
  console.log('connected to the db');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRoute);
app.use('/users', userRoute);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  res.send(main(allPages));
});

async function syncModels() {
  await db.sync();
}

app.listen(3000, () => {
  console.log('listening on port 3000');
});

syncModels();
