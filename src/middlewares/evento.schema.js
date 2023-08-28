import {checkSchema} from 'express-validator'


export const schemaEvent = checkSchema({
    eventName: {
        

        isAlphanumeric: {
            errorMessage: "El nombre del evento no puede llevar carácteres especiales",
            negated: false
        }
    
    },

    eventDateStart: {
        isDate: true
    },

    eventDateEnd:{
        isDate: true

    }
    
})

