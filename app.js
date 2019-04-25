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
const { db } = require('./models/index');
const userRoute = require('./routes/user');
const wikiRoute = require('./routes/wiki');

db.authenticate().then(() => {
  console.log('connected to the db');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRoute);
app.use('/user', userRoute);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send(main());
});

async function syncModels() {
  await db.sync({ force: true });
}

app.listen(3000, () => {
  console.log('listening on port 3000');
});

syncModels();
