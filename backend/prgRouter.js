const express = require('express')
const PRGValidator = require('./prgValidator');
const PRGRouter = express.Router()
const forms = [];
PRGRouter.use(express.json())

// Create new form on validate success, redirect to return form data
PRGRouter.route('/:type')
    .post(PRGValidator, (req, res) => {
        // TODO: Should be saved to DB but for ease will just use an array
        forms.push(req.body.text)
        res.redirect(`${req.params.type}/${forms.length - 1}`)
    })

// Return data for specific form - will assume redirect if referer is found in headers
PRGRouter.route('/:type/:id')
    .get((req,res) => {
        const isRedirect = !!req.headers['referer']
        if(isRedirect){
            res.status(201)
        }
        res.json({"text": `${forms[req.params.id]}`})
    })

module.exports = PRGRouter