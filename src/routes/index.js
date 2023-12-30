import express from 'express';
import { sendEmailController } from '../controllers/emailController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("backend en servicio");
});

router.post('/send-email', sendEmailController);
router.get('/send-email', (req, res) => {
    res.send("email en servicio");
});

export default router;
