import express, { json } from 'express';
import user from './routes/user.js';

const app = express();
app.use(json());
const port = 3000;
app.use('/user', user);
app.listen(port, () => {
  console.log(`listen: ${port}`);
});
