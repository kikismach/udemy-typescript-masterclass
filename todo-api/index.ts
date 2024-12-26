import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load .env file configuration.
dotenv.config();

import { AppDataSource } from './src/dbContext/appDbContext';
import { tasksRouter } from './src/controllers/tasks/task.router';

// Instantiate express app
const app: Express = express();

// Define server port
const port = process.env.PORT;

// Parse request Body
app.use(bodyParser.json());

// Use CORS install types as well
app.use(cors());

// Create Database Connection
AppDataSource.initialize()
  .then(() => {
    // Start listening to te requests on the defined port
    app.listen(port);
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

// Maps the controllers
app.use('/tasks', tasksRouter);
