const { Schema } = require("mongoose")

const levelSchema = new Schema({
  title: { type: String, required: true, minLenght: 3, maxLenght: 255 },
  image: { type: String, required: true },
  description: { type: String, required: true, minLenght: 3, maxLenght: 500 },
});

module.exports = levelSchema