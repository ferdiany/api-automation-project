const { expect } = require('chai');
const endpointLogin = require('../endpoint/login.endpoint');
const data = require('../data/dataFile');

describe('Login', () => {
	describe('Login Positive Scenario', () => {
        it(data.testcase.positive.suksesLogin, async () => {
            const response = await endpointLogin.postLogin
            (
                {
                    email: data.detail.emailLogin,
                    password: data.detail.passwordLogin
                }
            )

            expect(response.body.message).equal(data.message.successMessage);
            expect(response.body.data.Email).equal(data.detail.emailLogin);
        });
    });

    describe('Login Negative Scenario', () => {
        it(data.testcase.negative.loginWithWrongEmail, async () => {
            const response = await endpointLogin.postLogin
            (
                {
                    email: data.detail.emailRegister,
                    password: data.detail.passwordLogin
                }
            )
            
            expect(response.body.message).equal(data.message.loginFailed)
            expect(response.body.data).equal(null)
        })

        it(data.testcase.negative.loginWithWrongPassword, async () => {
            const response = await endpointLogin.postLogin
            (
                {
                    email: data.detail.emailLogin,
                    password: data.detail.passwordRegister
                }
            )
            
            expect(response.body.message).equal(data.message.loginFailed)
            expect(response.body.data).equal(null)
        })
    })
});
