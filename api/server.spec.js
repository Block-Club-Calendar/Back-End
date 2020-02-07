const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server', function(){
    beforeEach(async () => {
        await db('users').truncate();
        await db('events').truncate();
        await db('users_events').truncate();
    })

    const user = 
    {
        id: 1,
        username: "DFink",
        password: "password",
        email: "email@email.com",
        streetAddress: "123 abc st.",
        zipcode: "59802",
        city: "missoula",
        businessName: "asdfasdf",
        organization: false
    }
    const event =
    {
        eventTitle: "Missoula County Fair",
        geolocation: "46.848890,-114.013930",
        eventDescription: "Missoula county's annual Fair and Rodeo",
        eventStart: "2020-2-13 8:00",
        eventEnd: "2020-2-17 12:00",
        externalLink: "https://lh5.googleusercontent.com/p/AF1QipNLMf8aCS2hUtrCbXSZZXeRhWrvsEsh0Gx6-XFJ=s473-k-no"
    }

    describe('POST /register', function() {
        it('should return 201', function () {
            return request(server).post('/api/users/register').send(user)
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
        it('should return id and username', function() {
            return request(server).post('/api/users/register').send(user)
            .then(res => {
                expect(res.body).toEqual({id: 1, username: 'DFink'})
            })
        })
    })

    describe('POST /login', function() {
        it('should return 201', async() => {
            await request(server).post('/api/users/register').send(user);
            return request(server).post('/api/users/login').send({username: "DFink", password: "password"})
            .then(res => {
                console.log(res)
                expect(res.status).toBe(200)
            })
            
        })
        it('should return unauthorized', function(){
            const badUser = {username: '1231243', password: '12342134'}
            return request(server).post('/api/users/login').send(badUser)
            .then(res => {
                expect(res.status).toBe(401)
            })
        })
    })

    // describe('GET /users/auth/attending', function(){
    //     it('should return an array of events', async() => {
    //         await request(server).post('/api/users/register').send(user);
    //         return request(server).post('/api/users/login').send({username: "DFink", password: "password"})
    //         .then(res => {
    //             return request(server).get('/api/users/auth/attending').set('Cookie', 's%3A_Wz4rx3448CZVi-SxYKLjM3KW17FggVt.a390JGg2mn%2Bsmk6UYM94ZNRm06BQi4K%2FZE254SKci5g')
    //             .then(res => {
    //                 console.log(res.body)
    //                 expect(Array.isArray(res.body)).toBe(true)
    //             })
                
    //         })
    //     })
    // })

    describe('GET /events', function(){
        it('should return an array of events', function(){
            return request(server).get('/api/events/')
            .then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
        it('should return 200', function(){
            return request(server).get('/api/events/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('GET /events/:id', function(){
        it('should return 404', function(){
            return request(server).get('/api/events/1')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('should return an event at id', function(){

        })
    })

    // describe('GET /events/:id/rsvp', function(){
    //     it('should count the amount of users attending', function(){

    //     })
    // })

    // describe('POST /events/auth', function() {
    //     it('should return 200', function(){

    //     })
    //     it('should return an event object', function(){

    //     })
    // })

    // describe('PUT /events/auth/:id', function(){
    //     it('should return 200', function(){

    //     })
    // })

    // describe('DELETE /events/auth/:id', function(){
    //     it('should return 200', function(){

    //     })
    // })

    // describe('POST /events/auth/:id', function(){
    //     it('should return 200', function(){

    //     })
    // })

})