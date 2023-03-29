import { Router } from 'express';
import { v4 } from 'uuid';
import db from '../db.js';

const app = Router();
const arr = [];
app.get('/', async (req, res) => {
  const r = await db.user.findMany({});
  res.json(r);
});
app.post('/', async (req, res) => {
  const email = req.body?.email;
  const name = req.body?.name;
  const data = { name, email };
  const r = await db.user.create({ data });
  res.json(r);
});
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const where = { id: parseInt(id) };
  const r = await db.user.findMany({
    where,
  });
  res.json(r);
});
app.put('/:id/:name', async (req, res) => {
  const { id, name } = req.params;
  const data = { name };
  const where = { id: parseInt(id) };
  const r = await db.user.update({
    where,
    data,
  });
  res.json(r);
});
app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const where = { id: parseInt(id) };
  const r = await db.user.delete({
    where,
  });
  res.json(r);
});

export default app;
