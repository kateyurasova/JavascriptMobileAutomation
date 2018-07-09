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

    it('checking of the UserName', async function () {
        var userName = userPage.getUserName()
        await expect(userName).toEqual('MariaMitko')
        console.log("UserName test method was executed")
    })
})