import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/conceptStorePlatform');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongodb database connection established successfully');
});

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(4000, () => console.log('Express server running on port 4000'));
