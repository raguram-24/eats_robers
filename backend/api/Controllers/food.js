const Food = require('../Models/Food');
const mongoose = require('mongoose');

const e = require('cors');
const Restaurant = require('../Models/Restaurant');





exports.food_get_by_restId = async (req, res, next) => {
    try {
      const docs = await Food.find()
        .select('name price _id type image')
        .exec();
  
      const response = {
        count: docs.length,
        food: docs,
      };
  
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  };
  