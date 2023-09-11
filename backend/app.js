const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const userRoutes = require('./api/Routes/user')
const foodRoutes = require ('./api/Routes/food')
const restaurantRoutes = require('./api/Routes/restaurant')
const orderRoutes = require ('./api/Routes/order');
const cors = require('cors');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors())

mongoose.connect(process.env.MONGO_URI);
  

app.use('/user', userRoutes)
app.use('/foods',foodRoutes)
app.use('/restaurants',restaurantRoutes)
app.use('/order',orderRoutes);


app.use((req,res,next)=>{
    const error = new Error ('Not Found');
    error.status = 404;
    next(error);
})
//when our custom error doesn't work
app.use((error,req,res,next)=>{
    res.status (error.status||500);
    res.json({
        error:{
            message : error.message
        }
    })
})

module.exports = app;