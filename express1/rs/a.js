import { Router } from 'express';

const app = Router();

app.get('/b', (req, res) => {
  res.send(`<h1>/a/b</h1>`);
});

export default app;
