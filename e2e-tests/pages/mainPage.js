require('../pages/loginPage.js')

let mainPage = function () {
    let loginLink = element(by.xpath('//a[@href="/LoginAction.loginForm"]'))
    this.clickLogIn = async function () {
        await loginLink.click()
    }
}

module.exports = new mainPage()