const express = require('express');
const checkAuth = require('./middleware/checkAuth');
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>/    ad!!!!#@#fasdf </h1>');
});
app.use('', checkAuth, require('./routes/todos'));
app.listen(PORT, () => {
  console.log(`Now listening port: ${PORT}`);
});
