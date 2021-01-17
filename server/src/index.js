import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import server from './apollo-server';
import { db } from '../secret';

const databasePath = `mongodb+srv://${db.username}:${db.password}@cluster0-rtasa.gcp.mongodb.net/${db.name}`;
const graphqlPath = '/graphql';
const port = 4201;

const app = express();
app.use(cors());
app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}${graphqlPath}`));

server.applyMiddleware({ app, path: graphqlPath });

mongoose
  .connect(databasePath, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(console.error);

mongoose.connection.once('open', () => {
  console.log('mongodb database connection established successfully');
});
