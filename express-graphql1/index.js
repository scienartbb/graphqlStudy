import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express, { json } from 'express';
import { PrismaClient } from '@prisma/client';

import { schema } from './model/schema.js';

const app = express();

const dev = true;
const db = new PrismaClient(
  dev
    ? {
        log: [
          {
            emit: 'stdout',
            level: 'query',
          },
          {
            emit: 'stdout',
            level: 'error',
          },
          {
            emit: 'stdout',
            level: 'info',
          },
          {
            emit: 'stdout',
            level: 'warn',
          },
        ],
        errorFormat: 'pretty',
      }
    : null
);

const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    return { db };
  },
});
// Note you must call `server.start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors(), json(), expressMiddleware(server));
app.get('/db', (req, res) => {
  res.json(db.user.findMany({}));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Now listening port: ${PORT}`);
});
