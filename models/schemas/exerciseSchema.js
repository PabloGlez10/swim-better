const { Schema } = require("mongoose")

const exerciseSchema = new Schema({
  title: { type: String, required: true, minLenght: 3, maxLenght: 255 },
  image_video: { type: String, required: true },
  material: { type: String, required: true, minLenght: 3, maxLenght: 100 },
  difficulty: { type: String, required: true, enum: ['Blanco', 'Amarillo', 'Naranja', 'Rojo', 'Negro'] },
  description: { type: String, required: true, minLenght: 3, maxLenght: 500 },
  favorite: { type: Boolean, default: false }
});

module.exports = exerciseSchema