import express, { json } from 'express';
import checkAuth from './middleware/checkAuth.js';
import todos from './routes/todos.js';

const app = express();
app.use(json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>/</h1>');
});
app.use('', checkAuth, todos);
app.listen(PORT, () => {
  console.log(`Now listening port: ${PORT}`);
});
