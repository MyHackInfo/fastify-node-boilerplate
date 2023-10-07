import Fastify from "fastify";

const fastify = Fastify({logger:true});


// decleare a route
fastify.get('/', async function handler (request, reply) {
    return{
        hellow:'fukkk'
    }
})
// Run the server

try {
    await fastify.listen({port:3000})
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}