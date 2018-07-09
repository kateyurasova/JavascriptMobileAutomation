require('../pages/userPage.js')

let loginPage = function () {

    this.getURL = function () {
        var currentURL = browser.getCurrentUrl()
        return currentURL;

    }

    this.enterUserLogin = function (loginValue) {
        element(by.name("loginForm.login")).sendKeys(loginValue)

    }

    this.enterUserPassword = function (passwordValue) {
        element(by.name("loginForm.password")).sendKeys(passwordValue)
    }

    this.clickOkButton = async function () {
        await element(by.name('ok')).click()

    }

    this.logIn = async function (userLogin, userPassword) {

        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.name("loginForm.login"))), 10000,
            "field for entering of login did no appear in 10 sec")

        await element(by.name("loginForm.login")).sendKeys(userLogin)
        await element(by.name("loginForm.password")).sendKeys(userPassword)
        await element(by.name('ok')).click()
    }

}
module.exports = new loginPage()