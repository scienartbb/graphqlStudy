import express from 'express';
import a from './rs/a.js';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const id = req.params?.id;
  res.send(`<h1>/asda${id}</h1>`);
});
app.use('/a', a);
app.listen(port, () => {
  console.log(`Listen: ${port}`);
});
