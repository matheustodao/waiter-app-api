import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './router';
import path from 'node:path';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(cors());

    app.use(router);

    app.listen(PORT, () => console.debug(`Server Started at https://localhost:${PORT}`));
  })
  .catch((err) => console.log(`Mongo is failed: ${err}`));
