import {validationResult} from 'express-validator'


export const validatorError = (req, res, next) => {
    
    const errores = validationResult (req)
    if(errores.isEmpty()) {
        return next()
    }
    res.status(400).json({
        error: errores.array()
    })
}