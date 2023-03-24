import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServerPluginLandingPageProductionDefault } from 'apollo-server-core';

import { schema } from '@/model/schema.ts';
import { context } from '@/model/context.ts';

const apolloServer = new ApolloServer({
  schema,
  persistedQueries: false,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageGraphQLPlayground({
          settings: {
            'request.credentials': 'include',
          },
        }),
  ],
  context: async ({ req, res }) => {
    return { ...context };
  },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/g',
  })(req, res);
}

// 아래코드를 주석처리하면 GraphQL에서 응답없음 상태가 됨.
export const config = {
  api: {
    bodyParser: false,
  },
};
