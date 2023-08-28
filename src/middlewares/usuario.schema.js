import {checkSchema} from 'express-validator'
import { body } from 'express-validator'


export const schemaUser = checkSchema({
    userName: {
        isLength: {
            errorMessage: "Minimo 8 caracteres",
            options: {min: 8, max: 20},
        },

        isAlphanumeric: {
            errorMessage: "El nombre no puede llevar carácteres especiales",
            negated: false
        }
    
    },
    email: {
        isEmail: true
    }
    
})

export const validaciones = [
    body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email ingresado no es valido') 
]