exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        './tests/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 4
    },

    baseUrl: 'http://www.quizful.net/test',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }

};
