import supertest from 'supertest'
import { app } from '../../app'

describe(' POST /users/signup test cases', function () {
    const agent = supertest.agent(app)

    it('created 201 ', () => {
        return agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(201)
    })

    it('401 invalid email and password invalid request', async () => {
        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
            })
            .expect(400)

        await agent
            .post('/api/users/signup')
            .send({
                password: 'test@gmail.com',
            })
            .expect(400)
    })

    it('disallow duplicate users expect 400', async () => {
        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(201)

        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(400)
    })

    it('sign up has header cookie', async () => {
        const response = await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(201)

        expect(response.get('Set-Cookie')).toBeDefined()
    })



})
