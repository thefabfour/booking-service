const express = require('express');
const path = require('path');

const router = require('./router');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());
app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on PORT: ${PORT}`);
});
