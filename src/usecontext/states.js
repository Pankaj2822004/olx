
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Context from './context';
// import phone from "../images/phone_14_01-removebg-preview.png";
// import Headphone from "../images/headphoine-removebg-preview.png";
// import Laptop from "../images/laptop-removebg-preview.png";
// import Camera from "../images/camera-removebg-preview.png";

// const States = (props) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   // In your context provider
// // const [logIn, setLogIn] = useState({ userId: null, token: null });

// // // After successful login
// // setLoggedIn({ userId: user.id, token: user.token });

//   const [Buy, setBuy] = useState(null);
//   const [Allcategories, setAllcategories] = useState([]);
//   const [savedItems, setSavedItems] = useState({});
//   const category = [
//     {
//       img: Laptop,
//       label: 'laptop'
//     },
//     {
//       img: phone,
//       label: 'mobile'
//     },
//     {
//       img: Headphone,
//       label: 'Headphone'
//     },
//     {
//       img: Camera,
//       label: 'camera'
//     },
//   ];

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products'); // Adjust the URL as needed
//         setAllcategories(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filterItemsByCategory = (type) => {
//     return Allcategories.filter(item => item.type.toLowerCase() === type.toLowerCase());
//   };

//   const addItemToAllCategories = (newItem) => {
//     setAllcategories((prevItems) => [newItem, ...prevItems]);
//   };

//   return (
//     <Context.Provider value={{ category, Allcategories, filterItemsByCategory, selectedCategory, Buy, setBuy, savedItems, setSavedItems, setSelectedCategory, addItemToAllCategories }}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default States;

// States.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Context from './context';
// import phone from "../images/phone_14_01-removebg-preview.png";
// import Headphone from "../images/headphoine-removebg-preview.png";
// import Laptop from "../images/laptop-removebg-preview.png";
// import Camera from "../images/camera-removebg-preview.png";

// const States = (props) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [Buy, setBuy] = useState(null);
//   const [Allcategories, setAllcategories] = useState([]);
//   const [savedItems, setSavedItems] = useState({});
//   const [loggedIn, setLoggedIn] = useState({ loggedIn: false, userId: null }); // Initialize loggedIn state

//   const category = [
//     { img: Laptop, label: 'laptop' },
//     { img: phone, label: 'mobile' },
//     { img: Headphone, label: 'Headphone' },
//     { img: Camera, label: 'camera' },
//   ];

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setAllcategories(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filterItemsByCategory = (type) => {
//     return Allcategories.filter(item => item.type.toLowerCase() === type.toLowerCase());
//   };

//   const addItemToAllCategories = (newItem) => {
//     setAllcategories((prevItems) => [newItem, ...prevItems]);
//   };

//   return (
//     <Context.Provider value={{ category, Allcategories, filterItemsByCategory, selectedCategory, Buy, setBuy, savedItems, setSavedItems, setSelectedCategory, addItemToAllCategories, loggedIn, setLoggedIn }}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default States;

import React, { useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode'; // Updated import
import { jwtDecode } from 'jwt-decode';

import axios from 'axios';
import Context from './context';
import phone from "../images/phone_14_01-removebg-preview.png";
import Headphone from "../images/headphoine-removebg-preview.png";
import Laptop from "../images/laptop-removebg-preview.png";
import Camera from "../images/camera-removebg-preview.png";
import io from "socket.io-client"

const States = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [Buy, setBuy] = useState(null);
  const [Allcategories, setAllcategories] = useState([]);
  const [savedItems, setSavedItems] = useState({});
  const [loggedIn, setLoggedIn] = useState({ loggedIn: false, userId: null });
  const [socket,setSocket] = useState(null)

  useEffect(()=>{
   if(loggedIn?.userId) {
    const socketInstance = io("http://localhost:8800",{
      query:{
        userId:loggedIn.userId
      }
    })
    console.log({socketInstance})
    socketInstance.on('connect',()=>{
      setSocket(socketInstance)
    })

    socketInstance.io.on("error",(error)=>{
      throw new Error(error.toString())
    })}

  },[setSocket,loggedIn])

  console.log({loggedIn})

  const category = [
    { img: Laptop, label: 'laptop' },
    { img: phone, label: 'mobile' },
    { img: Headphone, label: 'Headphone' },
    { img: Camera, label: 'camera' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setAllcategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
console.log({socket})
  // Fetch logged-in state from localStorage
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const currentUser = JSON.parse(user);
        setLoggedIn({ loggedIn: true, userId: currentUser.userId });
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const filterItemsByCategory = (type) => {
    return Allcategories.filter(item => item.type.toLowerCase() === type.toLowerCase());
  };

  const addItemToAllCategories = (newItem) => {
    setAllcategories((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <Context.Provider value={{ category, Allcategories, filterItemsByCategory, selectedCategory, Buy, setBuy, savedItems, setSavedItems, setSelectedCategory, addItemToAllCategories, loggedIn, setLoggedIn, socket, setSocket }}>
      {props.children}
    </Context.Provider>
  );
};

export default States;
