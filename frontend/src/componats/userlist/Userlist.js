import React from 'react'
import "./userlist.scss"
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Userlist() {
    const url = "http://localhost:4000/user";
    const token = localStorage.getItem('token')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pwd, setPwd] = useState("");
    const [address, setAddress] = useState("");
   

    const headers = {
        Authorization: `Bearer ${token}`
      };
    
    //   function handleClick(event) {
    //     event.preventDefault();
    //     axios
    //       .post(url, {headers})
    //       .then((response) => {
    //         console.log(response.data);
    //         toast.error(response.data.message);
    //       })
    //       .catch((error) => {
    //         toast.error(error.message);
    //       });
    //   }

  useEffect(() => {
    
    axios.get(url,{headers})
      .then(response => {
        console.log(response)
        setName(response.data.user.name);
      })
      .catch(error => {
        console.error(error);
        toast.error(error.message);
      });
  }, []);
  console.log(name)

    return (
        <div>
             <div className='userlist'>
                 <div className='names'>User Name</div>
                 <div className='mails'> Email Address</div>
                 <div className='nums'>Phone number</div>
                 <div className='addresses'>Address</div>
                 <div className='edits'>
                    <button className='update'>Update</button>
                    <button className='delete'>Delete</button>
                 </div>
                
            </div>
            
        </div>
    )
}

export default Userlist
