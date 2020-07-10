import Request from 'supertest'
import kernel from '../../src/app/http/Kernel'
import {User} from '../../src/app/models'

describe('registration', () => {
    afterEach(() => {
        User.destroy({
            where: {},
            truncate: true
        })
    })

    it('can create an account', async() => {
        const user = {
            name: 'Jon doe',
            email: 'jon.doe@example.io',
            password: '123456',
        }
        
        const response = await Request(kernel)
            .post('/register')
            .send(user)
        
        const responseData = response.body.data
        
        expect(response.status).toBe(201)
        expect(responseData.name).toBe(user.name)
        expect(responseData.email).toBe(user.email)
        expect(responseData).not.toHaveProperty('user.password')

    })

    it('requires a user name', async() => {
        const user = {
            email: 'jon.doe@example.io',
            password: '123456',
        }
        
        const response = await Request(kernel)
            .post('/register')
            .send(user)

        expect(response.status).toBe(400)
    })


    it('requires a email', async() => {
        const user = {
            name: 'Jon Doe',
            password: '123456',
        }
        
        const response = await Request(kernel)
            .post('/register')
            .send(user)

        expect(response.status).toBe(400)
    })


    it('requires a password', async() => {
        const user = {
            name: 'Jon Doe',
            email: 'jon.doe@example.io',
        }
        
        const response = await Request(kernel)
            .post('/register')
            .send(user)

        expect(response.status).toBe(400)
    })
})
