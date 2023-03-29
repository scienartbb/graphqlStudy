const app = require('express').Router();
const { v4 } = require('uuid');

const todos = [];
app.get('/todos', (req, res) => {
  res.json(todos);
});
app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  const v = todos.find((a) => a.id === id);
  res.json(v);
});
app.post('/todos', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  const id = v4();
  const title = req.body.title;
  console.log(title);
  const v = { id, title, completed: false };
  todos.push(v);
  res.json(v);
});
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  const i = todos.findIndex((a) => a.id === id);
  todos[i].completed = true;
  res.json(todos[i]);
});
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  console.log(`id: ${id}`);
  todos = todos.filter((a) => a.id !== id);
  res.json(todos);
});

module.exports = app;
