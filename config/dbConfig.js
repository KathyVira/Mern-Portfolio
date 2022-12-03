const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
});

const conection = mongoose.connection;

conection.on('error', () => {
    console.log('Error connecting to database');
});

conection.on('connected', () => {
    console.log('MongoDB connection successful');
})

module.exports = conection;