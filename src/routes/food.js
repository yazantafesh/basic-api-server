'use strict';

const express = require('express');
const Food = require('../models/food');
const validator = require('../middlewares/validator');
const foodRouter = express.Router();
const food = new Food();


foodRouter.post('/', validator, createFood);

foodRouter.get('/', getFood);

foodRouter.get('/:id', getFood);

foodRouter.put('/:id', validator, updateFood);

foodRouter.delete('/:id', deleteFood);

function createFood (req, res){

  const resObj = food.create(req.body);

  res.json(resObj);
}

function getFood(req,res) {
  
  const resObj = food.read(req.params.id);

  res.json(resObj);
}

function updateFood(req,res){

  const resObj = food.update(req.params.id, req.body);

  res.json(resObj);
}

function deleteFood(req,res){

  const resObj = food.delete(req.params.id);

  res.json(resObj);
}

module.exports = foodRouter;

