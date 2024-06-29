
const root = require('./api/root') // import root.js

module.exports = async function (fastify, opts,next) { // export async function
    fastify.get('/', root) // GET / -> root.js
    next() // next
}