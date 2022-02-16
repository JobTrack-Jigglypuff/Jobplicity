const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;
const accountController = require('./controllers/accountControllers');
const appController = require('./controllers/applicationControllers');
const db = require('./database');

/* handle parsing request body
 */
app.use(express.json());

// handle cors
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

/**
 * handle requests for static files
 */
app.use(express.urlencoded({ extended: true }));

/**
 * define route handlers
 */

app.post(
  '/signup',
  accountController.hash,
  accountController.newAccount,
  (req, res) => {
    res.status(201).json(res.locals.newUser);
  }
);

app.post(
  '/login',
  accountController.getAccount,
  accountController.verifyAccount,
  appController.getApp,
  (req, res) => {
    if (!res.locals.data.verified) res.sendStatus(403);
    res.status(201).json(res.locals.data);
  }
);

// route handler to respond with main app
app.get('/', (req, res) => {
  res.status(200).json('Welcome to Jobplicity Backend!');
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.sendStatus(404);
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  // defaultErr object
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
