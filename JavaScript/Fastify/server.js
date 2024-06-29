// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })


fastify.register(require('@fastify/formbody')) // decode แปลงเป็น JSON
fastify.register(require('@fastify/cors'), { // ใช้ สำหรับการยิงโค้ด สำหรับคนทั้วไป
    origin: '*', // ติดต่อเซิฟเวอร์ ในกรณี * คือรับ โดเมน หมดเพื่อการทดสอบ หาก โดเมนไม่ตรงกันจะทำการ reject
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // 
    methods: ['GET', 'PUT', 'POST', 'DELETE'], // ตั้งค่าเพื่อรับ method มาในระบบ หากไม่ตรงตามเงื่อนไข ให้ reject
})

fastify.register(require('@fastify/jwt'), { // json web token ใช้สำหรับ verifil ตัวตน
    secret: 'topkub' // กำหนด token ในกรณีนี้ คือ "topkub"
}) 

let member_list = [{
    member_id: 1,
    member_name: 'John'
},
{
    member_id: 2,
    member_name: 'Doe'
},
{
    member_id: 3,
    member_name: 'Smith'
}
]

fastify.decorate("authenticate", async function (request, reply) { // ใช้ method check verifiled token
    try {
        await request.jwtVerify()
    } catch (err) {
        reply.send(err)
    }
})

const onRequest = {
    onRequest: [fastify.authenticate]
}

fastify.get('/' ,function handler(request, reply) {
    reply.send(member_list)
})

fastify.post('/signup', (req, reply) => {
    const payload = {
        member_id: 1,
        member_name: 'John',
        isAdmin: true,
        ext: '2024-03-12',
        ixt: '2024-03-12'
    }
    const token = fastify.jwt.sign({
        payload
    })
    reply.send({
        token
    })
})


fastify.post('/add/member', onRequest ,function handler(request, reply) {

    const member_name = request.body.member_name

    member_list.push({
        member_id: member_list.length + 1,
        member_name: member_name
    })

    reply.send({
        message: 'add member success',
        member_list: member_list
    })
})

fastify.put('/edit/member/:member_id',onRequest, function handler(request, reply) {
    const member_id = request.params.member_id
    const member_name = request.body.member_name

    member_list.filter((member) => {
        if (member.member_id == member_id) {
            member.member_name = member_name
        }
    })

    reply.send({
        message: 'edit member success',
        member_list: member_list
    })
})

fastify.delete('/delete/:member_id',onRequest, function handler(request, reply) {
    const member_id = request.params.member_id

    member_list.splice(member_id - 1, 1)

    reply.send({
        message: 'delete member success',
        member_list: member_list
    })
})



fastify.listen({
    port: 3000
}, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})



