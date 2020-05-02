const expresss = require('express');
const properties = require('./config/properties');
const conn = require('./config/connectionDB');
const reminderRoute = require('./routes/reminder.route');
const bodyParser = require('body-parser')

const app = expresss();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
const router = expresss.Router();

conn();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api', router)
reminderRoute(router);

app.listen(properties.PORT, (request, response) => {
    console.log(`Server is running on ${properties.PORT} port`);
});