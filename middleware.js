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

module.exports = middleware;