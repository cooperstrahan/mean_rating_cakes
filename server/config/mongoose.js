const mongoose = require('mongoose');

module.exports = {
    mongoose: mongoose.connect('mongodb://localhost/cake_data', 
        {useNewUrlParser: true})
}