import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import server from './apollo-server';

const databasePath = 'mongodb://localhost:27017/conceptStorePlatform';
const graphqlPath = '/graphql';
const port = 4000;

const app = express();
app.use(cors());
app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:4000${graphqlPath}`));

server.applyMiddleware({ app, path: graphqlPath });

mongoose.connect(databasePath).catch((error) => console.error(error));
mongoose.connection.once('open', () => {
  console.log('mongodb database connection established successfully');
});
