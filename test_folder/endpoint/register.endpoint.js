const data = require('../data/dataFile');
const supertest = require('supertest');
const api = supertest(data.baseUrl);

const postRegister = (name, email, password) => api.post('/api/authaccount/registration')
  .send(name, email, password);

module.exports = {postRegister};
