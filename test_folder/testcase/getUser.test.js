const { expect, assert } = require('chai')
const endpointGetUser = require('../endpoint/getUser.endpoint')
const endpointLogin = require('../endpoint/login.endpoint')
const data = require('../data/dataFile')

before(async () => {
    const login = await endpointLogin.postLogin({
        email: data.detail.emailLogin,
        password: data.detail.passwordLogin
    })

    token = `Bearer ${login.body.data.Token}`
})

describe('Get Users', () => {
    it(data.testcase.positive.getAllUser, async () => {
        const response = await endpointGetUser.getAllUser(token)

        const dataTotal = response.body.data.length

        expect(response.body.per_page).equal(10)
        assert.strictEqual(dataTotal, response.body.per_page, data.message.messageDifferentTotal)
    })

    it(data.testcase.positive.getSpesifikUser, async () => {
        const response = await endpointGetUser.getSpesifikUser(token)

        expect(response.body.id).equal(data.detail.idUser)
    })
})
