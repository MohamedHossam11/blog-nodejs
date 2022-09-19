import { Request, Response, NextFunction } from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create application/x-www-form-urlencoded parser
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const { create_relations } = require('./models/relations');

var sequelizeConfig = require('./configs/db_config');

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log('Connected to postgres');
  })
  .catch((err: any) => {
    console.log('Unable to connect to postgres', err);
  });

const app = express();

app.use(cors());

const port = 3000;

// parse application/json
app.use(bodyParser.json());

// routes
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept'
  );
  next();
});

sequelizeConfig
  .sync({ force: false })
  .then(() => console.log('Synced models with database'))
  .catch((error: any) =>
    console.log('Could not sync models with database', error)
  );

create_relations();

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
