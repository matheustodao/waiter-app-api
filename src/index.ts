import 'express-async-errors';
import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './router';
import path from 'node:path';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const PORT = 3001;

    io.on('connect', () => {
      console.log('Connected');
    });

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(cors());

    app.use(router);

    server.listen(PORT, () => console.debug(`Server Started at https://localhost:${PORT}`));
  })
  .catch((err) => console.log(`Mongo is failed: ${err}`));
