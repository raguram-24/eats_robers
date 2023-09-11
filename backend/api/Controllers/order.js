const Order = require('../Models/Order');
const Food = require('../Models/Food');
const mongoose = require('mongoose');


exports.orders_get_all = async (req, res, next) => {
    try {
        const docs = await Order.find()
            .populate("orderFoods.food")
            .exec();

        res.status(200).json({
            count: docs.length,
            orders: docs
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.orders_create_order = async (req, res, next) => {
    try {
        const order = new Order({
            orderFoods: req.body.foods
        });

        const result = await order.save();

        console.log(result);
        res.status(201).json({
            message: 'Order stored'
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}


exports.orders_get_order = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.orderId)
            .populate('orderFoods.food')
            .exec();

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({
            order: order
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}


exports.order_patch = async (req, res, next) => {
    try {
      const id = req.params.order_Id;
  
      if (id.length === 24) {
        const result = await Order.findById(id).exec();
  
        if (!result) {
          return res.status(400).json({
            message: "Order not found",
          });
        }
  
        const update = req.body;
        const updatedVersion = await Order.findByIdAndUpdate(id, update).exec();
  
        console.log(updatedVersion);
  
        res.status(200).json({
          message: "Order has been Updated",
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


exports.orders_delete_order = async (req, res, next) => {
    try {
        const result = await Order.deleteOne({ _id: req.params.orderId }).exec();

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({
            message: "Order deleted",
            request: {
                type: 'POST',
                url: 'http://localhost:3000/order',
                body: { foodId: 'ID', quantity: "Number" }
            }
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
