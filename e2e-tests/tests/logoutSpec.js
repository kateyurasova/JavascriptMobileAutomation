describe('opening of the userPage with using of PageObject Pattern', function () {

    const BASE_URL = 'http://www.quizful.net/test'
    const USER_LOGIN = "MariaMitko"
    const USER_PASSWORD = "ZcysqGthtw13"

    let mainPage = require('../pages/mainPage.js')
    let loginPage = require('../pages/loginPage.js')
    let userPage = require('../pages/userPage.js')

    beforeEach(async function () {
        browser.ignoreSynchronization = true
        browser.get(BASE_URL)
        await mainPage.clickLogIn()
        await loginPage.logIn(USER_LOGIN, USER_PASSWORD)

    })

    it('checking of the LoginOut button', async function () {
        await userPage.clickLogOut()
        let pageURL = userPage.getURL()
        await expect(pageURL).toEqual("http://www.quizful.net/LoginAction.loginForm")
        console.log("Logout button test method was executed")
    })

})