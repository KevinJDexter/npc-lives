const mongoose = require('mongoose');
databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/npc_lives';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
  console.log(`connected to ${databaseUrl}`)
})

mongoose.connection.on('error', (error) => {
  console.log(`error cnnecting to database: ${error}`)
})

module.exports = mongoose;