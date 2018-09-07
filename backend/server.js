import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { server } from './src/schema';

const app = express();
app.use(cors());

const path = 'mongodb://localhost:27017/conceptStorePlatform';
mongoose.connect(path);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongodb database connection established successfully');
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);