const data = require('../data/dataFile');
const supertest = require('supertest');
const api = supertest(data.baseUrl);

const endpoint = {
    allUser: () => '/api/users',
    spesifikUser: (idUser) => `/api/users/${idUser}`
}

const getAllUser = (token) => api.get(endpoint.allUser())
  .set('Authorization', token)
  .send();

const getSpesifikUser = (token) => api.get(endpoint.spesifikUser(data.detail.idUser))
  .set('Authorization', token)
  .send()

module.exports = {getAllUser, getSpesifikUser};
