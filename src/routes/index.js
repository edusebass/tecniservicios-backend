import express from 'express';
import { sendEmailController } from '../controllers/emailController.js';
import { añadirProducto, editarProducto, listarProductos} from '../controllers/producto_Controller.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send("backend en servicio");
});

router.post('/send-email', sendEmailController);
router.get('/send-email', (req, res) => {
    res.send("email en servicio");
});

// rutas para el producto
router.get('/productos', listarProductos)
router.put('/productos/:id', editarProducto);
router.post('/productos', añadirProducto);


export default router;
