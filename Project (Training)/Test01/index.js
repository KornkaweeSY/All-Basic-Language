const fastify = require('fastify')({logger : true}) // logger : true -> boolean value to enable logging

fastify.register(require('@fastify/cors'), { // CORS
    origin : '*', // Access-Control-Allow-Origin
    methods : ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // Access-Control-Allow-Methods
    allowedHeaders : ['Content-Type', 'Authorization'], // Access-Control-Allow-Headers
    exposedHeaders : ['Content-Range', 'X-Content-Range'] // Access-Control-Expose-Headers
})

fastify.register(require('./routes/router'), {prefix : '/api'}) // routes -> router.js -> /api prefix

fastify.listen({port : 3000, host : '127.0.0.1'}, (err, address) => { // listen on port 3000
    if(err) { // error handling
        console.log(err) // log error
        process.exit(1) // exit process
    } 
    console.log(`Server listening on ${address}`) // log server listening
})