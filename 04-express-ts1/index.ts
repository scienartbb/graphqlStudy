import express, { Express, Request, Response } from 'express';
import route1 from './routes/route1';
import { subFunction } from './sub';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

app.use('/route1', route1);
app.use('/route2', route1);
app.use('/route3', route1);
app.use('/route4', route1);

console.log(`${subFunction()}`);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
