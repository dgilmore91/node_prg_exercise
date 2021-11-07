class FormValidator {
    static validateStructure(data) {
        const structErrors = []
        if(!data.text){
            structErrors.push('no_text_provided')
        }
        return structErrors
    }
    static validateFields(data) {
        const fieldErrors = []
        if(data.text.length > 10) {
            fieldErrors.push('text_too_long')
        }
        return fieldErrors
    }
}
module.exports = FormValidator