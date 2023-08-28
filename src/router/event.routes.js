import {Router} from 'express';
import {eventoCtrl} from '../controller/event.controllers.js';
import {schemaEvent} from '../middlewares/evento.schema.js'
import {validatorError} from '../middlewares/validator.error.user.js'

const routerevent = Router();

// Aquí van las cinco operaciones básicas (CRUD)

    routerevent.get('/evento/', eventoCtrl.viewEvents)
    routerevent.post('/evento/',schemaEvent, validatorError, eventoCtrl.createEvent)
    routerevent.put('/evento/:id_event', eventoCtrl.updateEvent)
    routerevent.get('/evento/:id_event', eventoCtrl.viewOneEvent)
    routerevent.delete('/evento/:id_event', eventoCtrl.deleteEvent)

    export {routerevent}