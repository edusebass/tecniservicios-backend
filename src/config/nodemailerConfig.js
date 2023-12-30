import dotenv from 'dotenv';

dotenv.config();

export const getTransporterConfig = () => {
    return {
        host: 'smtp.gmail.com',
        port: 587,
        service: 'gmail',
        auth: {
            user: process.env.CORREO,
            pass: process.env.PASS,
        }
    };
};
  