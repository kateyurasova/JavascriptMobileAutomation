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
        await element(by.name("loginForm.login")).sendKeys(userLogin)
        await element(by.name("loginForm.password")).sendKeys(userPassword)
        await element(by.name('ok')).click()
    }

}
module.exports = new loginPage()