const { Schema } = require("mongoose")

let userSChema = new Schema({
  firstName: { type: String, required: true, minLenght: 3, maxLenght: 100 },
  lastName: { type: String, required: true, minLenght: 3, maxLenght: 100 },
  userName: { type: String, required: true, minLenght: 3, maxLenght: 100, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLenght: 3, maxLenght: 200 },
  profile: { type: String, required: false, default: 'user' },
  created_at: { type: Date, default: Date.now }
});

module.exports = userSChema