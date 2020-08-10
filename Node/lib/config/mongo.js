const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options) {
    fastify.register(require('fastify-mongodb'), {
        url: 'mongodb+srv://testuser:testuser@test.udxac.mongodb.net/delicon?retryWrites=true&w=majority'
    })
};

module.exports = fastifyPlugin(dbConnector);