const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/calendar', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
