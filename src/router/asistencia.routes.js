import {Router} from 'express';
import {asistenciaCtrl} from '../controller/asistencia.controllers.js';

const routerGuest = Router();

// Aquí van las cinco operaciones básicas (CRUD)

routerGuest.get('/asistencia/', asistenciaCtrl.viewGuests)
routerGuest.post('/asistencia/', asistenciaCtrl.createGuest)
routerGuest.put('/asistencia/:id', asistenciaCtrl.updateGuest)
routerGuest.get('/asistencia/:id', asistenciaCtrl.viewOneGuest)
routerGuest.delete('/asistencia/:id', asistenciaCtrl.deleteGuest)

    export {routerGuest}