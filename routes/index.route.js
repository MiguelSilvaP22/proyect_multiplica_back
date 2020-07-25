
const express = require('express');
const api = express.Router();
const pjson = require('../package.json');

api.get('/',(  (req, res) =>  res.send({
    api: 'color-multiplica',
    version: pjson.version
})));


module.exports = api;
