const mongoose = require('mongoose');
const properties = require('./properties');

module.exports = () => {
    console.log("URL DATABASE: ", properties.mongoURL);   
    mongoose.connect(properties.mongoURL);

   /*  mongoose.connection.on('connected', () =>{
        console.log(connected("Connected to default connection: ", properties.mongoURL))
    });

    mongoose.connection.on('error', (error) => {
        console.log(error("Error connection to database", error));
    });

    mongoose.connection.on("disconnected", () => {
        console.log(disconnected("Disconnected"));
    });

    process.on('SIGINT', () => {
        console.log(termination("Termination"));
        process.exit(0);
    }) */
}
