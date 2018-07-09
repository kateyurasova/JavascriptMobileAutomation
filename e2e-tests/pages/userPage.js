var userPage = function () {

    this.getUserName = async function () {
        let nameField = await element(by.xpath('//*[@id="user-panel"]/li[1]/b/a'))
        return userName = nameField.getText()
    }

    this.clickLogOut = async function () {
        await element(by.xpath('//*[@id="user-panel"]/li[7]/a')).click()
    }

    this.getURL = function () {
        var currentURL = browser.getCurrentUrl()
        return currentURL;

    }

}
module.exports = new userPage()