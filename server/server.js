const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log('listening on port 8000')
})