var express = require('express');
var app = express();
const PORT = 3000;

var middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('Private route hit!');
        next();
    },
    logger: (req, res, next) => {
        console.log(`Requested at ${new Date().toString()}: ${req.method} ${req.originalUrl}`);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
    res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log('Express server started on port ' + PORT + '!');
});