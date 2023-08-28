import {Router} from 'express';
import {eventoCtrl} from '../controller/event.controllers.js';

const routerevent = Router();

// Aquí van las cinco operaciones básicas (CRUD)

    routerevent.get('/evento/', eventoCtrl.viewEvents)
    routerevent.post('/evento/', eventoCtrl.createEvent)
    routerevent.put('/evento/:id', eventoCtrl.updateEvent)
    routerevent.get('/evento/:id', eventoCtrl.viewOneEvent)
    routerevent.delete('/evento/:id', eventoCtrl.deleteEvent)

    export {routerevent}