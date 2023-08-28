import {Router} from 'express';
import {usuarioCtrl} from '../controller/usuario.controllers.js';
import {validatorError} from '../middlewares/validator.error.user.js'
import {schemaUser} from '../middlewares/usuario.schema.js'
import {validaciones} from '../middlewares/usuario.schema.js'

const routerUsuario = Router();

// Aquí van las cinco operaciones básicas (CRUD)

routerUsuario.get('/usuario/', usuarioCtrl.viewUsers)
routerUsuario.post('/usuario/', validaciones, schemaUser, validatorError, usuarioCtrl.createUser)
routerUsuario.put('/usuario/:id_user', usuarioCtrl.updateUser)
routerUsuario.get('/usuario/:id_user', usuarioCtrl.viewOneUser)
routerUsuario.delete('/usuario/:id_user', usuarioCtrl.deleteUser)

    export {routerUsuario}