import React from 'react';
import { useGlobalContext } from '../usecontext/context';
import Footer from "./Footer"
const CategoryItems = () => {
  const { selectedCategory, filterItemsByCategory } = useGlobalContext();
  const items = selectedCategory ? filterItemsByCategory(selectedCategory) : [];

  return (
    <>
      <h3 className='my-16 mx-8'>home / {selectedCategory}</h3>
      <div className='space-y-60 '>
      <div className="flex flex-col -my-10 ">
        {
          items.map((item, i) => (
            <div key={i} className="flex w-[98%] h-[190px] m-5 bg-white border-2 border-green-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="h-[185px] w-72 object-cover" src={item.img} alt="" />
              </a>
              <div className="p-5 flex flex-col justify-between w-full">
                <a href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.cost}</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <div className="info flex justify-between mt-auto">
                  <p className='text-gray-700 dark:text-gray-400'>{item.Location}</p>
                  <p className='text-slate-500'> {item.Date}</p>
                </div>
              </div>
            </div>
          ))
        }
        <div style={{margin: "100px 100px 3px 8px", height: "200px"}} className="">
        <Footer/>
        </div>
      </div>
      
      </div>
    </>
  );
};

export default CategoryItems;
