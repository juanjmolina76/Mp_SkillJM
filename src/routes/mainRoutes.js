const express = require ('express');
const router = express.Router();

const controladores = require ('../controllers/mainController.js');


router.post ('/create-order', controladores.crearOrden);
router.get ('/success', controladores.SuccessPago);
router.get ('/failure', controladores.failurePago);
router.post ('/webhook', controladores.recibeWebhook);


module.exports = router;