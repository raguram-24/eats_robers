const Food = require('../Models/Food');
const mongoose = require('mongoose');

const e = require('cors');
const Restaurant = require('../Models/Restaurant');





  exports.food_get_all = async (req, res, next) => {
    try {
      const queryObj = { ...req.query };
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  
      const docs = await Food.find(JSON.parse(queryStr))
        .select('name price _id type ')
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
  

  exports.food_post = async (req, res, next) => {
    try {
      console.log(req.body);
      
      const food = new Food({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
      });
  
      const foodRes = await food.save();

      res.status(200).json({
        createdProduct: foodRes,
        message: "Food Item has been Added",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  };

  exports.food_get_byid = async (req, res, next) => {
    try {
      const id = req.params.foodId;
      if (id.length === 24) {
        const result = await Food.findById(req.params.foodId).exec();
        if (!result) {
          return res.status(404).json({
            message: "Food Item not found",
          });
        }
        res.status(200).json({
          output: result,
        });
      } else {
        return res.status(200).json({
          message: "Invalid Id",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    }
  };

  
  exports.food_patch = async (req, res, next) => {
    try {
      console.log(req.file);
      console.log(req.body);
  
      const id = req.params.foodId;
  
      if (id.length === 24) {
        const result = await Food.findById(id).exec();
  
        if (!result) {
          return res.status(400).json({
            message: "Food item not found",
          });
        }
  
        const update = req.body;
        const updatedVersion = await Food.findByIdAndUpdate(id, update).exec();
  
        console.log(updatedVersion);
  
        res.status(200).json({
          message: "Food item has been Updated",
          result: updatedVersion,
        });
      } else {
        return res.status(400).json({
          message: "Invalid id",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err.message,
      });
    }
  };

  exports.food_delete = async (req, res, next) => {
    try {
      const result = await Food.findByIdAndDelete(req.params.foodId).exec();
  
      if (!result) {
        return res.status(404).json({
          message: "Food item not found",
        });
      }
  
      res.status(200).json({
        message: "Food item has been Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  };
  

  
  
  