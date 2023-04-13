import express from 'express';
import db from './db.js';

const app = express();
app.get('/', async (req, res) => {
  const r = await db.user.findMany({});
  res.json(r);
});
app.get('/:name/:email', async (req, res) => {
  const { name, email } = req.params;
  const r = await db.user.create({ data: { name, email } });
  // res.json(r);
  res.send('done!');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Listen: ${port}`);
});
