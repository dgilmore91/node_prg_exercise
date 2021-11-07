const validatorsPath = './validators';
const PRGValidator = (req, res, next) => {
    // Find validator that corresponds to object and run its validate method on request data
    const objectValidator = require(`${validatorsPath}/${req.params.type}Validator`)
    let errors = objectValidator.validateStructure(req.body)
    if(errors.length === 0) {
        errors = objectValidator.validateFields(req.body)
    }
    if(errors.length > 0) {
        const errorMessage = errors.join(', ')
        res.status(400).json({'error': errorMessage})
    } else {
        next()
    }
}
module.exports = PRGValidator;