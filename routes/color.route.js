const express = require('express');
const ColorsController = require('../controllers/color.controller');

const api = express.Router();

api.get('/color', ColorsController.getColors);
api.get('/color/:id', ColorsController.getColor);
api.post('/color', ColorsController.CreateColor);

module.exports = api;
