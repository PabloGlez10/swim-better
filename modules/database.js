const mongoose = require('mongoose')
const config = require('./config')

class Database {
  constructor() {
    this.db = null
  }

  async connect() {

    mongoose.set('runValidators', true)

    this.db = mongoose.connection;

    try {
      await mongoose.connect(config.DB_CONNECTION_STRING, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

      console.log("Conectandote a MongoDB");
    } catch (e) {
      console.log("Error al conectarte")
      console.error(e)
    }
  }

}

module.exports = new Database()
