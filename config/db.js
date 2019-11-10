const mongoose = require('mongoose');
const config = require('config');      // for accessing to global variables
const db = config.get('mongoURI');     // access to global variable

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // to avoid warnings, need these 4 parameters:
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected! :> ');

  } catch (err) {
      console.error(err.message);
      process.exit(1);
  }
}
module.exports = connectDB;