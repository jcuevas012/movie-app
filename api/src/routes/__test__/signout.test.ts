import supertest from 'supertest'
import { app } from '../../app'

describe(' POST /users/sigout test cases', function () {
    const agent = supertest.agent(app)

    it('signout 2000 ', async () => {
        const response = await agent
            .post('/api/users/signout')
            .send({})
            .expect(200)


        expect(response.get('Set-Cookie')).toBeDefined()
    })
})

