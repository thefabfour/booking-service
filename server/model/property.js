const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
  propertyId: String,
  price: Number,
  cleaning: Number,
  avg: Number,
  totalRev: Number,
});

const Property = model('Property', propertySchema);

module.exports = Property;
