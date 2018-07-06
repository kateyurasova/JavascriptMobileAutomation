
exports.STEP = (title) => {
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

exports.endStep = () => {
    try {
        process.send({
            event: 'step:end',
        })
    } catch (error) {
        console.log("Error when try to end the step")
    }
}

