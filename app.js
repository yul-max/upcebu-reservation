// Dependencies
import express from 'express';
import Debug from 'debug';
import path from 'path';
import http from 'http';
const debug = Debug('backend:main-app');

const app = express();

// Express Setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

// Server Setup
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
  debug('App is running at http://localhost:%d', port);
  debug('Press CTRL-C to stop');
});