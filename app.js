const express = require('express');
const morgan = require('morgan');
const app = express();
const addPage = require('./views/addPage');
const { db } = require('./models/index');
const wikiPage = require('./views/wikipage');
const userList = require('./views/userList');

db.authenticate().then(() => {
  console.log('connected to the db');
});

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send(addPage());
});

async function syncModels() {
  await db.sync({ force: true });

  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
}

syncModels();
