const data = require('../data/dataFile');
const supertest = require('supertest');
const api = supertest(data.baseUrl);

const postLogin = (email, password) => api.post('/api/authaccount/login')
  .send(email, password);

module.exports = {postLogin};
