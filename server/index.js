/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '../client/dist');
const router = require('./router');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.use('/api/rooms/', router);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
