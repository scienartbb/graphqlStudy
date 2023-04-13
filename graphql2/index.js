import express, { json } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { schema } from './schema.js';

const app = express();

const server = new ApolloServer({
  schema,
});
// Note you must call `server.start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', json(), expressMiddleware(server));

const port = 3000;
app.listen(port, () => {
  console.log(`listen: ${port}`);
});
