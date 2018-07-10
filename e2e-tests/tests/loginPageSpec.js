describe('opening of the userPage with using of PageObject Pattern', function () {

    const BASE_URL = 'http://www.quizful.net/test'
    const USER_LOGIN = "MariaMitko"
    const USER_PASSWORD = "ZcysqGthtw13"
    const USER_NAME = "MariaMitko"
    const log4js = require('log4js')
    let logger = log4js.getLogger()
    logger.level = 'info'
    let fs = require('fs')
    let logName = 'cheese.log' + Math.random()
    log4js.configure({
        appenders: {cheese: {type: 'file', filename: logName}},
        categories: {default: {appenders: ['cheese'], level: 'info'}}
    })

    let mainPage = require('../pages/mainPage.js')
    let loginPage = require('../pages/loginPage.js')
    let userPage = require('../pages/userPage.js')

    beforeEach(async function () {
        browser.ignoreSynchronization = true
        logger.info('GIVEN User is at the main page')
        browser.get(BASE_URL)
        logger.info('WHEN user performs log in')
        await mainPage.clickLogIn()
        await loginPage.logIn(USER_LOGIN, USER_PASSWORD)

    })

    it('checking of the UserName', async function () {
        logger.info('THEN Verify that user name is correct')
        let userName = userPage.getUserName()
        await expect(userName).toEqual(USER_NAME, `Actual user name is not equal to expected value: ${USER_NAME}`)
    })

    afterEach(async function () {
        await userPage.clickLogOut()
    })
})