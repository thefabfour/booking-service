const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
  propertyId: String,
});

const Property = model('Property', propertySchema);

module.exports = Property;
