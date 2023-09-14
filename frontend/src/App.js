import React from 'react'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import "./App.scss"
import Hotel from './pages/hotel/Hotel';
import Order from './pages/order/Order';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './componats/header/Header';
import Hotal_food_list from './componats/hotal_food_list/Hotal_food_list';
import Restboxlist from './componats/restboxlist/Restboxlist';
import Adminhome from './pages/adminpage/adminhome/Adminhome';
import Addrest from './pages/adminpage/AddRest/Addrest';
import Hotelhome from './pages/Hotelpage/Hotelhome/Hotelhome';
import Addfood from './pages/Hotelpage/Addfood/Addfood';
import User from './pages/user/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/food" element={<Hotal_food_list/>}/>
          <Route path="/hotel" element={<Restboxlist/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/admin" element={<Adminhome/>}/>
          <Route path="/addrest" element={<Addrest/>}/>
          <Route path="/hotelowner" element={<Hotelhome/>}/>
          <Route path="/addfood" element={<Addfood/>}/>
          <Route path="/user" element={<User/>}/>
          
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
