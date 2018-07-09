require('../pages/userPage.js')

let loginPage = function () {
    let loginInput = element(by.name("loginForm.login"))
    let loginPassword = element(by.name("loginForm.password"))
    let okButton = element(by.name('ok'))

    this.getURL = function () {
        let currentURL = browser.getCurrentUrl()
        return currentURL

    }

    this.enterUserLogin = async function (loginValue) {
        await loginInput.sendKeys(loginValue)

    }

    this.enterUserPassword = async function (passwordValue) {
        await loginPassword.sendKeys(passwordValue)
    }

    this.logIn = async function (userLogin, userPassword) {
        this.enterUserLogin(userLogin)
        this.enterUserPassword(userPassword)
        await okButton.click()
    }

}
module.exports = new loginPage()