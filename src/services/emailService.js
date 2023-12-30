import nodemailer from 'nodemailer';
import { getTransporterConfig } from '../config/nodemailerConfig.js';

export const sendEmail = async (name, email, message) => {
    const transporter = nodemailer.createTransport(getTransporterConfig());

    const mailOptions = {
        from: 'edu03sebas@gmail.com',
        to: `${email}`,
        subject: 'TECNISERVICIOS LLANTERA QUITUMBE ',
        text: `Gracias ${name} por su compra. Adjuntamos la factura.`
    };

    return transporter.sendMail(mailOptions);
};
