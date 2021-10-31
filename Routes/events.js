const { Router } = require("express");
const { getEventos,crearEvento,actualizarEvento,eliminarEvento } = require("../controllers/eventsController");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const {check} = require('express-validator');
const { isDate } = require("../helpers/isDate");
const router = Router();
// Obtener eventos
//todas tienen que pasar por la validacion del jwt
router.use(validarJWT);

router.get('/',getEventos);
router.post('/',
[
    check('title','titulo es obligatorio').not().isEmpty(),
    check('start','fecha de inicio es obligatoria').custom(isDate),
    check('end','fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos],
crearEvento);
router.put('/:id',actualizarEvento);
router.delete('/:id',eliminarEvento)
module.exports = router