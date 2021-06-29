'use strict';

const express = require('express');
const Cloth = require('../models/clothes');
const validator = require('../middlewares/validator');
const clothesRouter = express.Router();
const cloth = new Cloth();


clothesRouter.post('/', validator, createCloth);

clothesRouter.get('/', getCloth);

clothesRouter.get('/:id', getCloth);

clothesRouter.put('/:id', validator, updateCloth);

clothesRouter.delete('/:id', deleteCloth);

function createCloth (req, res){

  const resObj = cloth.create(req.body);

  res.json(resObj);
}

function getCloth(req,res) {
  
  const resObj = cloth.read(req.params.id);

  res.json(resObj);
}

function updateCloth(req,res){

  const resObj = cloth.update(req.params.id, req.body);

  res.json(resObj);
}

function deleteCloth(req,res){

  const resObj = cloth.delete(req.params.id);

  res.json(resObj);
}

module.exports = clothesRouter;
