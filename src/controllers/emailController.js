import { sendEmail } from '../services/emailService.js';

export const sendEmailController = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await sendEmail(name, email, message);
        res.status(200).send('Correo enviado correctamente');
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).send('Error al enviar el correo');
    }
};

