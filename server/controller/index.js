const model = require('../model');

module.exports = {
  get: (req, res) => {
    const { propertyId } = req.params;
    model.Booking.find({ propertyId })
      .then((data) => {
        res.send(data);
      });
  },
};
