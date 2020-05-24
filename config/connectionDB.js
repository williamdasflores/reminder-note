const mongoose = require('mongoose');
const properties = require('./properties');

module.exports = () => {
    console.log("URL DATABASE: ", properties.mongoURL);   
    mongoose.connect(properties.mongoURL);
}
