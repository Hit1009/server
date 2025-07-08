const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://hitarthvyas234:hitarth@mern-ethnus.w2dixlo.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Ethnus', { useNewUrlParser: true, useUnifiedTopology: true, })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;