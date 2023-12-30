import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 1000;
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
