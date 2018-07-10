describe('opening of the userPage with using of PageObject Pattern', function () {

    const BASE_URL = 'http://www.quizful.net/test'
    const USER_LOGIN = "MariaMitko"
    const USER_PASSWORD = "ZcysqGthtw13"
    const USER_NAME = "MariaMitko"


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
        let userName = userPage.getUserName()
        allure.createStep('[{0}] Saving the settings', async function () {
            await expect(userName).toEqual(USER_NAME, `Actual user name is not equal to expected value: ${USER_NAME}`)
        })
    })

    afterEach(async function () {
        await userPage.clickLogOut()
    })
})