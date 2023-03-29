import { Router } from 'express';
import { v4 } from 'uuid';

const app = Router();
const arr = [];
app.get('/todos', (req, res) => {
  res.json(arr);
});
app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  const v = arr.find((a) => a.id === id);
  res.json(v);
});
app.post('/todos', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  const id = v4();
  const title = req.body.title;
  console.log(title);
  const v = { id, title, completed: false };
  arr.push(v);
  res.json(v);
});
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  const i = arr.findIndex((a) => a.id === id);
  arr[i].completed = true;
  res.json(arr[i]);
});
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  arr = arr.filter((a) => a.id !== id);
  res.json(arr);
});

export default app;
