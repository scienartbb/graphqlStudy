import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
const app = express();

const PORT = 3000;
const PORT_HTTPS = 3001;

app.get('/', (req, res) => {
  res.send('<h1>/</h1>');
});

http.createServer(app).listen(PORT, () => {
  console.log(`Now listening port: ${PORT}`);
});
const options = {
  // key: fs.readFileSync('/etc/letsencrypt/live/t4u.shop/privkey.pem'),
  // cert: fs.readFileSync('/etc/letsencrypt/live/t4u.shop/fullchain.pem'),
};
https.createServer(options, app).listen(PORT_HTTPS, () => {
  console.log(`Now listening port: ${PORT_HTTPS}`);
});
