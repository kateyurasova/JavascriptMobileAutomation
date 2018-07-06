'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

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

    it('should add one and two', function() {
        firstNumber.sendKeys(1)
        secondNumber.sendKeys(2)

        goButton.click()

        expect(latestResult.getText()).toEqual('3')
    })

    it('should add four and six', function() {
        // Fill this in.
        expect(latestResult.getText()).toEqual('10')
    })

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1')
    })
})
