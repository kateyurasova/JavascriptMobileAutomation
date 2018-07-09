require('../pages/loginPage.js')

let mainPage = function () {
    this.clickLogIn = async function () {
        let loginLink = element(by.xpath('//a[@href="/LoginAction.loginForm"]'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.xpath('//a[@href="/LoginAction.loginForm"]'))), 10000,
            "Login link did no appear at the Main page in 10 seconds")
        await element(by.xpath('//a[@href="/LoginAction.loginForm"]')).click()
    }
}

module.exports = new mainPage()