import express, { json } from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { schema } from './schema.js';

const app = express();
app.use(json());

const server = new ApolloServer({
  schema,
});
// Note you must call `server.start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors(), json(), expressMiddleware(server));

const port = 3000;
app.listen(port, () => {
  console.log(`listen: ${port}`);
});
