const data = require('../data/dataFile')
const supertest = require('supertest')
const api = supertest(data.baseUrl)

const createUser = (token, name, email, location) => api.post('/api/users')
    .set('Authorization', token)
    .send(name, email, location)

module.exports = {createUser}
