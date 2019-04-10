var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log('Express server started on port ' + PORT + '!');
});