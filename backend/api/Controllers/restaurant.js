const mongoose = require('mongoose');
const Restaurant = require('../Models/Restaurant');

exports.restaurant_get_all = async (req, res, next) => {
    try {
      const docs = await Restaurant.find()

  
      const response = {
        count: docs.length,
        restaurant: docs,
      };
  
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  };


  exports.restaurant_post = async (req, res, next) => {
    try {
      const restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        address: req.body.address
        // image: req.files[0].path
      });
  
      const result = await restaurant.save();
      
      console.log(result);
  
      res.status(200).json({
        createdProduct: result,
        message: "Restaurant has been Added",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  };

  exports.restaurant_get_byid = async (req, res, next) => {
    try {
      const id = req.params.restaurantId;
  
      if (id.length === 24) {
        const result = await Restaurant.findById(id)
  
        if (!result) {
          return res.status(404).json({
            message: "Restaurant not found",
          });
        }
  
        res.status(200).json({
          output: result,
        });
      } else {
        return res.status(400).json({
          message: "Invalid Id",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err.message,
      });
    }
  };

  exports.restaurant_patch = async (req, res, next) => {
    try {
      const id = req.params.restaurantId;
  
      if (id.length === 24) {
        const result = await Restaurant.findById(id).exec();
  
        if (!result) {
          return res.status(400).json({
            message: "Restaurant not found",
          });
        }
  
        const update = req.body;
        const updatedVersion = await Restaurant.findByIdAndUpdate(id, update).exec();
  
        console.log(updatedVersion);
  
        res.status(200).json({
          message: "Restaurant has been Updated",
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
        error: err,
      });
    }
  };


  exports.restaurant_delete = async (req, res, next) => {
    try {
      const id = req.params.restaurantId;
  
      if (id.length === 24) {
        const result = await Restaurant.findById(id).exec();
  
        if (!result) {
          return res.status(400).json({
            message: "Restaurant not found",
          });
        }
  
        const updatedVersion = await Restaurant.findByIdAndDelete(id).exec();
  
        console.log(updatedVersion);
  
        res.status(200).json({
          message: "Restaurant has been Deleted",
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
        error: err,
      });
    }
  };
  
  
  
  
  