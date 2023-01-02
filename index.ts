import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use(router);

    const PORT = 3001;
    app.listen(PORT, () => console.debug(`Server Started at https://localhost:${PORT}`));
  })
  .catch((err) => console.log(`Mongo is failed: ${err}`));
