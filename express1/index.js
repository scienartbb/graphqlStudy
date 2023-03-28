import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static('public'));
app.use('/d', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
