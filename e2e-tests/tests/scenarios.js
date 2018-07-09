
describe('Protractor Demo App', function() {
    let firstNumber = element(by.model('first'))
    let secondNumber = element(by.model('second'))
    let goButton = element(by.id('gobutton'))
    let latestResult = element(by.binding('latest'))

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/')
    })

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator')
    })

    it('should add one and two', async function() {
        firstNumber.sendKeys(1)
        secondNumber.sendKeys(2)
        goButton.click()

        let loginLink = element(by.xpath('//a[@href="/LoginAction.loginForm"]'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.presenceOf(element(by.xpath('//*[text()="3"]'))), 10000,
            "Correct result of calculation of 1+2 is not presented in 3 seconds")
        expect(latestResult.getText()).toEqual('3')
    })

    xit('should add four and six', function() {
        // Fill this in.
        expect(latestResult.getText()).toEqual('10')
    })

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1')
    })
})

/*function STEP (title) {
    try {
        process.send({
            event: 'step:end',
        })
    } catch (error) {
        console.log("Error when try to end the step")
    }
    try {
        process.send({
            event: 'step:start',
            title: title
        })
    } catch (error) {
        console.log("Error when try to start the step")
    }
}
function endStep() {
    try {
        process.send({
            event: 'step:end',
        })
    } catch (error) {
        console.log("Error when try to end the step")
    }
}*/
