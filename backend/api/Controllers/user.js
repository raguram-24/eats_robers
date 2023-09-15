const mongoose = require ('mongoose');
const User = require('../Models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();


exports.user_get_all = async (req, res, next) => {
    try {
      const result = await User.find()
        .select('name _id address phonenumber password role')
        .exec();
  
      res.status(200).json({
        Count: result.length,
        Users: result,
      });
    } catch (err) {
      console.error(err);
      res.status(401).json({
        error: err,
      });
    }
};

//User Signup
exports.createUser = async (req, res, next) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email }).exec();
  
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      } else {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds)
        
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
  
        const newUser = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          password: hashedPassword,
          address: req.body.address,
          role: req.body.role,
        });
  
        const result = await newUser.save();
  
        console.log(result);
  
        res.status(200).json({
          message: "User Created",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    }
  };

  // User login
  exports.user_login = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
  
      if (!user) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  
      if (passwordMatch) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id,
          },
          "secret",
          {
            expiresIn: '1h',
          }
        );
  
        return res.status(200).json({
          user: user,
          message: 'Logged In',
          token: token,
        });
      } else {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    }
  };

  //Delete a User
  exports.user_delete = async (req, res, next) => {
    try {
      const result = await User.deleteOne({ _id: req.params.userId }).exec();
  
      if (result.deletedCount === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      res.status(200).json({
        message: "User Deleted",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    }
  };

  //Update a User
  exports.user_patch = async(req,res,next)=>{ 
    const id = req.params.restaurantId 
    if(id.length === 24){//req.body is not iterable
    const user = await User.findById(id)
    .exec()
    .then(result =>{
        if(!result){
            res.status(400).json({
                message:"User is not found"
            })
        } else {
            const update = req.body
            Restaurant.findByIdAndUpdate(id,update)
            .exec()
            .then(updatedVersion =>{
                console.log(updatedVersion);
                res.status(200).json({
                    message : " User  has been Updated",
                    result : updatedVersion
                })
            })
        }
    })

} else {
    res.status(400).json({
        message : "Invalid id"
    })
}
}
  