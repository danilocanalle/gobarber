import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(
      'mongodb+srv://gobarber:gobarber@cluster0-7busk.mongodb.net/gobarber?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
