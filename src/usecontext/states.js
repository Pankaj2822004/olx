
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from './context';
import phone from "../images/phone_14_01-removebg-preview.png";
import Headphone from "../images/headphoine-removebg-preview.png";
import Laptop from "../images/laptop-removebg-preview.png";
import Camera from "../images/camera-removebg-preview.png";

const States = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [Buy, setBuy] = useState(null);
  const [Allcategories, setAllcategories] = useState([]);
  
  const category = [
    {
      img: Laptop,
      label: 'laptop'
    },
    {
      img: phone,
      label: 'mobile'
    },
    {
      img: Headphone,
      label: 'Headphone'
    },
    {
      img: Camera,
      label: 'camera'
    },
  ];

  useEffect(() => {
    // Fetch data from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Adjust the URL as needed
        setAllcategories(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filterItemsByCategory = (type) => {
    return Allcategories.filter(item => item.type.toLowerCase() === type.toLowerCase());
  };

  const addItemToAllCategories = (newItem) => {
    setAllcategories((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <Context.Provider value={{ category, Allcategories, filterItemsByCategory, selectedCategory, Buy, setBuy, setSelectedCategory, addItemToAllCategories }}>
      {props.children}
    </Context.Provider>
  );
};

export default States;
