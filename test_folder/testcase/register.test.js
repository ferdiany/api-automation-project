const { expect } = require('chai');
const endpointRegister = require('../endpoint/register.endpoint');
const data = require('../data/dataFile');

describe('Register', () => {
	describe('Register User Positive Scenario', function() {
		it(data.testcase.positive.suksesRegis, async function() {
			const response = await endpointRegister.postRegister(
				{
					name: data.detail.nameRegister,
					email: data.detail.emailRegister,
					password: data.detail.passwordRegister
				}
			)
	
			if (response.body.data == null) {
				throw new Error(data.message.errorRegisMessage);
			} else {
				expect(response.status).to.equal(200);
				expect(response.body.message).equal(data.message.successMessage);
			}
		});
	});
	describe('Register User Negative Scenario', function() {
		it(data.testcase.negative.regisWithRegisteredEmail, async function() {
			const response = await endpointRegister.postRegister(
				{
					name: data.detail.nameLogin,
					email: data.detail.emailLogin,
					password: data.detail.passwordLogin
				}
			);

			expect(response.body.message).equal('The email address you have entered is already registered');
			expect(response.body.data).is.null
		});
		
		it(data.testcase.negative.regisWithInvalidEmail, async function() {
			const response = await endpointRegister.postRegister(
				{
					name: data.detail.nameLogin,
					email: data.detail.invalidEmail,
					password: data.detail.passwordLogin
				}
			);
			expect(response.body.Message).equal('The request is invalid.');
		});

		it(data.testcase.negative.regisWithInvalidPassword, async function() {
			const response = await endpointRegister.postRegister(
				{
					name: data.detail.nameLogin,
					email: data.detail.emailLogin,
					password: data.detail.invalidPassword
				}
			);

			expect(response.body.Message).equal('The request is invalid.');
		});
	});
});
