const { Property } = require('../model');

const prop = (req, res) => {
  const { propertyId } = req.params;
  Property.findOne({ propertyId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = prop;
