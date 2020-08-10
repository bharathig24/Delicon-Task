async function routes(fastify, options) {
    const collection1 = fastify.mongo.db.collection('user');
    const collection2 = fastify.mongo.db.collection('reservation');

    var ObjectId = require('mongodb').ObjectId;

    fastify.post('/register', async(request, reply) => {
        try {
            collection1.findOne({ eMail: request.body.eMail }, function(err, example) {
                if (err) console.log(err);
                if (example) {
                    console.log("This has already been saved");
                } else {
                    collection1.insertOne(request.body, function(err, res) {
                        if (err) throw err;
                        // console.log("1 document inserted");
                        reply.send({ data: "true" })
                    });
                }
            })
        } catch (e) {
            console.log(e);
        }
    });

    fastify.post('/login', async(request, reply) => {
        try {
            const result = await collection1.findOne({ eMail: request.body.eMail });
            // console.log(result.password);
            if (result.password === request.body.password) {
                reply.send({ data: "true", userName: result.userName });
            }
        } catch (error) {
            console.log(error);
        }
    });

    fastify.post('/book', async(request, reply) => {
        try {
            collection2.insertOne(request.body, function(err, res) {
                if (err) throw err;
                // console.log("1 document inserted");
                reply.send({ data: "true" });
            });
        } catch (error) {
            console.log(error);
        }
    });

    fastify.post('/read', async(request, reply) => {
        try {
            const result = await collection2.find({ bEmail: request.body.eMail }).toArray(function(err, result) {
                if (err) throw err;
                // console.log(result);
                reply.send({ data: result });
            });
            // console.log(result);

        } catch (error) {
            console.log(error);
        }
    });

    fastify.post('/edit', async(request, reply) => {
        try {
            collection2.updateOne({ _id: ObjectId(request.body.id) }, {
                $set: {
                    date: request.body.date,
                    guest: request.body.guest,
                    time: request.body.time,
                    fName: request.body.fName,
                    lName: request.body.lName,
                    eMail: request.body.eMail,
                    mobile: request.body.mobile
                }
            }, function(err, res) {
                if (err) throw err;
                // console.log("1 document updated");
                reply.send({ data: "true" })
            });
            console.log(request.body);
        } catch (error) {
            console.log(error);
        }
    });

    fastify.post('/delete', async(request, reply) => {
        try {
            collection2.deleteOne({ _id: ObjectId(request.body) }, function(err, obj) {
                if (err) throw err;
                // console.log("1 document deleted");
                reply.send({ data: "true" });
            });
        } catch (error) {
            console.log(error);
        }
    });
}

module.exports = routes;