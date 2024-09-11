import React from 'react';
import Buy from '../images/electronic-gadgets-500x500.webp'
import Sell from '../images/sell.avif'
import chat from "../images/chat.avif"
const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            About Webs
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-400">
            Webs is your go-to platform for buying and selling electronics. Connect directly with sellers and buyers, and enjoy a seamless shopping experience.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src={Buy} alt="Product" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Buy Products</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Browse through a wide range of electronics and find the perfect product for you.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src={Sell} alt="Product" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sell Products</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Easily list your electronics for sale and reach potential buyers directly.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src={chat} alt="Chat" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Direct Communication</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Chat directly with sellers and buyers to get all the information you need before making a purchase.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">Our Mission</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-400 text-center">
            At Webs, our mission is to provide a secure, efficient, and enjoyable platform for buying and selling electronics. We aim to build a community where users can easily connect, communicate, and transact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
