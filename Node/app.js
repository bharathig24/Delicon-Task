//fastify
const fastify = require('fastify')({
    logger: true
});

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
    origin: '*',
    credentials: true
});

//database
fastify.register(require('./lib/config/mongo'));

//route
fastify.register(require('./lib/routes/route'));

//run the server
fastify.listen(3000, function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
});