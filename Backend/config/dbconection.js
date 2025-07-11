const mongoose = require('mongoose');

async function dbconnection() {
  await mongoose.connect('mongodb://127.0.0.1:27017/USER', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}

module.exports = dbconnection;