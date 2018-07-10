var userPage = function () {

    let EC = protractor.ExpectedConditions

    let nameField = element(by.xpath('//*[@id="user-panel"]/li[1]/b/a'))
    let logoutLink = element(by.xpath('//*[@id="user-panel"]/li[7]/a'))

    this.getUserName = async function () {
        let userName = await nameField.getText()
        return userName
    }

    this.clickLogOut = async function () {
        await logoutLink.click()
    }

    this.getURL = function () {
        let currentURL = browser.getCurrentUrl()
        return currentURL;
    }

}
module.exports = new userPage()