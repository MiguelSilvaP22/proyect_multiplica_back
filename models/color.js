const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * @description generate schema por color for mongo.
 */
const ColorSchema = Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: String,
  year: Number,
  color: String,
  pantone_value: String,
});

module.exports = mongoose.model('Color', ColorSchema);
