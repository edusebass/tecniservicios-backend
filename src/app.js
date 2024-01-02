import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 1000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.post('/send-email', upload.single('file'), async (req, res) => {
  try {
    const { name, email } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CORREO,
        pass: process.env.PASS
      },
    });

    const mailOptions = {
      from: 'tucorreo@gmail.com',
      to: email,
      subject: 'Factura LLANTAS || LLANTERA QUITUMBE TECNISERVICIOS',
      text: `Hola ${name}, gracias por su compra, adjuntamos la factura.`,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
