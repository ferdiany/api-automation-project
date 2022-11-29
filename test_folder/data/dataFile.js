module.exports = {
    baseUrl: 'http://restapi.adequateshop.com',
    testcase: {
        positive: {
            suksesRegis: 'Success Register User',
            suksesLogin: 'User Success Login'
        },
        negative: {
            regisWithRegisteredEmail: 'Register User with Registered Email',
            regisWithInvalidEmail: 'Register User with invalid Email',
            regisWithInvalidPassword: 'Register User with invalid password',
            loginWithWrongEmail: 'User login with wrong email',
            loginWithWrongPassword: 'User login with wrong password'
        }
    },
    detail: {
        nameRegister: 'User Testing 01',
        emailRegister: 'usertesting@yopmail.com',
        passwordRegister: 'usertesting123',
        nameLogin: 'Ferdian',
        emailLogin: 'akunferdian@yopmail.com',
        passwordLogin: 'testing1234',
        invalidEmail: 'emailinvalid',
        invalidPassword: '12345'
    },
    message: {
        successMessage: 'success',
        errorRegisMessage: 'User already registered, please change email registration on dataFile emailRegister',
        loginFailed: 'invalid username or password'
    }

};
