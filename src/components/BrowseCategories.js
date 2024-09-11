
import React, { useState, useContext } from "react";
import Context from "../usecontext/context";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../usecontext/context";
import Footer from "./Footer";
import Img1 from "../images/heart (1).png";
import Img2 from "../images/save.png";

const BrowseCategories = ({ loggedIn, showAlert }) => {
  const { category, Allcategories } = useContext(Context);

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [savedItems, setSavedItems] = useState({});
  const navigate = useNavigate();
  const { setSelectedCategory } = useGlobalContext();
  const { setBuy } = useGlobalContext();

  const Buy = (i) => {
    if (!loggedIn) {
      showAlert("Please login first", "warning");
      navigate("/login");
    } else {
      setBuy(i);
      navigate("/buy");
    }
  };

  const handleCategoryClick = (type) => {
    console.log("Category clicked:", type);
    setSelectedCategory(type);
    navigate("/category");
  };

  const toggleSave = (index) => {
    setSavedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="my-11 max-w-full p-2 h-[1000px] bg-fuchsia-200">
      <div className="flex h-14 justify-between">
        <h2 className="text-stone-950 font-semibold">Browse Categories</h2>
        <Link className="underline cursor-pointer" to="/seeall">
          see all
        </Link>
      </div>
      <div className="flex">
        {category.map((item, i) => (
          <section
            key={i}
            onClick={() => handleCategoryClick(item.label)}
            className={`flex flex-col cursor-pointer gap-2 w-[25%] justify-center items-center ${
              item.label === "Laptop" && !hoveredCategory
                ? "border-b-4 border-black"
                : ""
            } ${
              hoveredCategory && hoveredCategory === item.label
                ? "border-b-4 border-black"
                : ""
            }`}
            onMouseEnter={() => setHoveredCategory(item.label)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <img src={item.img} className="w-[60px] h-16" alt={item.label} />
            <p>{item.label}</p>
          </section>
        ))}
      </div>
      <div className="my-9">
        <h4 className="text-sm text-sky-800">Fresh recommendations</h4>
      </div>
      <div className="flex flex-wrap">
        {Allcategories.map((item, i) => (
          <div
            key={i}
            className="relative w-[22%] h-[360px] m-5 bg-white border-2 border-green-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              onClick={() => Buy(i)}
              className="h-48 w-full object-cover cursor-pointer"
              src={item.img}
              alt=""
            />
            <img
              className="absolute top-2 right-2 h-7 bg-white rounded-full w-6 cursor-pointer"
              src={savedItems[i] ? Img2 : Img1}
              alt="save-icon"
              onClick={() => toggleSave(i)}
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 mt-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.cost}
                </h5>
              </a>
              <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
              <div className="info flex justify-between text-right">
                <p>{item.Location}</p>
                <p className="text-slate-500"> {item.Date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseCategories;