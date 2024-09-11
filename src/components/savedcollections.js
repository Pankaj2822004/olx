import React, { useContext } from "react";
import Context from "../usecontext/context";
import HeartFilled from "../images/save.png";
import Footer from  './Footer'


const SavedCollections = () => {
    const { Allcategories = [], savedItems = {} } = useContext(Context); // Provide default values
  
    // Filter saved items based on `savedItems`
    const savedItemsList = Allcategories.filter((item) => savedItems[item._id]);
  
    return (
      <div className="my-11 max-w-full p-2 bg-purple-300">
        <h2 className="text-stone-950 font-semibold">Saved Collections</h2>
        <div className="flex flex-wrap">
          {savedItemsList.length > 0 ? (
            savedItemsList.map((item) => (
              <div
                key={item._id}
                className="relative w-[22%] h-[360px] m-5 bg-white border-2 border-green-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="h-48 w-full object-cover"
                  src={item.img}
                  alt={item.desc}
                />
                <img
                  className="absolute top-2 right-2 h-7 bg-white rounded-full w-6 cursor-pointer"
                  src={HeartFilled} 
                  alt="saved-icon"
                />
                <div className="p-5">
                  <h5 className="mb-2 mt-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.cost}
                  </h5>
                  <p className="mb-6 font-normal dark:text-gray-400 break-words">
                    {item.desc}
                  </p>
                  <div className="info flex text-gray-500 justify-between text-right">
                    <p className="truncate max-w-[150px]">{item.Location}</p>
                    <p className="text-slate-500"> {item.Date}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items saved yet.</p>
          )}
        </div>
        <Footer/>
      </div>
      
    );
  };
  
export default SavedCollections;

