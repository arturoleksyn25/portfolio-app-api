const mongoose = require('mongoose');
const config = require('../config/dev');

require('./models/portfolio');

exports.connect = () => {
  return mongoose.connect(config.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected to DB!')
    }
  });
}