const cal = require('./calendar');

module.exports = {
  get: (req, res) => cal(req, res),
};
