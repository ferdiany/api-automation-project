const { expect } = require('chai')
const endpointCreateUser = require('../endpoint/createUser.endpoint')
const endpointLogin = require('../endpoint/login.endpoint')
const data = require('../data/dataFile')

before(async () => {
    const login = await endpointLogin.postLogin({
        email: data.detail.emailLogin,
        password: data.detail.passwordLogin
    })

    token = `Bearer ${login.body.data.Token}`
})


describe('Create User', () => {
    describe('Create User Positive Scenario', () => {
        it(data.testcase.positive.suksesCreateUser, async () => {
            const response = await endpointCreateUser.createUser(
                token,
                {
                    name: data.detail.newUsername,
                    email: data.detail.newEmailUser,
                    location: data.detail.newLocationUser
                }
            )
            if(response.body.name === undefined){
                throw new Error('User already added, please change newEmailUser on datafile.js')
            } else{
                expect(response.body.name).equal(data.detail.newUsername)
                expect(response.body.email).equal(data.detail.newEmailUser)
                expect(response.body.location).equal(data.detail.newLocationUser)
            }
        })
    })
    describe('Create User Negative Scenario', () => {
        it(data.testcase.negative.userAlreadyCreated, async () => {
            const response = await endpointCreateUser.createUser(
                token,
                {
                    name: data.detail.newUsername,
                    email: data.detail.emailRegister,
                    location: data.detail.newLocationUser
                }
            )
            expect(response.body.Message).equal(data.message.errorCreatedMessage)
        })
    })
})
