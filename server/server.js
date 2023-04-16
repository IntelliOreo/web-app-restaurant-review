const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get(
  '/api',
  cookieController.setCookie,
  sessionController.startSession,
  (req, res) => {
    return res.json(res.locals.curSession);
  }
);
app.post('/api/user/signIn', (req, res) => {
  console.log('req.bodyreq.bodyreq.bodyreq.bodyreq.body' + req.body)
  return res.sendStatus(200);
});
app.post('/api', sessionController.updateSession, (req, res) => {
  return res.json(res.locals.updateSession);
});

app.delete('/api', sessionController.clearupSession, (req, res) => {
  return res.sendStatus(200);
});

app.use('*', (req, res) => {
  res.status(404).send('Not Found - 404 handler in server.js');
});

app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = { error: 'An error occur' };
  const errObj = Object.assign({}, defaultErr, err);
  console.log('errObj in global handler', errObj);
  res.status(500).json(errObj);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
