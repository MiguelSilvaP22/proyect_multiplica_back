const app = require('./app');
const pjson = require('./package.json');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
const e = require('express');
dotenv.config();

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const uri = `${process.env.DB_DIALECT}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_COLLECTION}`;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      console.error('Error conecction mongo: ', err)
    } else {
      app.listen(process.env.API_PORT, () => {
        console.log('#################################');
        console.log('#######    API COLOR     ########');
        console.log(`#######  VERSION:  ${pjson.version} ########`);
        console.log('#################################');
      });
    }
  });
