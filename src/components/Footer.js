import React from "react";
import image1 from "../images/10464408.png";
import image2 from "../images/sl_z_072523_61700_05.jpg";
import image3 from "../images/v982-d3-04.jpg";
import img4 from "../images/audi-logo-1969-download.png";
import tesle from "../images/tesla-logo-2007-full-download.png";
import img5 from "../images/subaru-logo-2019-download.png";
import BMW from "../images/bmw-logo-1917-download.png";
import { Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="-my-0 my-40">
      <div style={{margin: "41px 94px 28px -9px"}} className=" w-[1350px] h-40  bg-gray-300 my-6">
        <div className="check my-5">
          <div className="line h-[2px] w-[45%] bg-slate-800 my-5 mx-auto"></div>
        </div>
        <form className=" mx-15  ">
          <select id="countries" className=" bg-gray-300 px-1 mx-32 my-8 ">
            <option defaultValue>Choose a country</option>
            <option value="US">India</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select id="countries" className=" bg-gray-300 px-1 -mx-20 my-8 ">
            <option defaultValue>Categories</option>
            <option value="US">Laptop</option>
            <option value="CA">Camera</option>
            <option value="FR">Headphone</option>
            <option value="DE">Mobile</option>
          </select>
          <select id="countries" className=" bg-gray-300 px-1 mx-32 my-8 ">
            <option defaultValue>About us</option>
            {/* <option value="US"><Link to="/contactus">Contact </Link></option>
            <option value="CA"><Link to="/about">About</Link></option> */}
           
          </select>
          <select id="countries" className=" bg-gray-300 px-1  my-8 ">
            <option defaultValue>Trending Locations</option>
            <option value="US">delhi</option>
            <option value="CA">Mumbai</option>
            <option value="FR">kolkata</option>
            <option value="DE">Bangalore</option>
          </select>
        </form>
        <div
          className="flex justify-end mx-6 my-8 space-x-4"
          style={{ margin: "-83px 16px 1px 1px" }}
        >
          <img className="h-12 w-12" src={image1} alt="Icon 1" />
          <img className="h-12 w-12" src={image2} alt="Icon 2" />
          <img className="h-12 w-12" src={image3} alt="Icon 3" />
        </div>{" "}
      </div>
      <div style={{margin: "-28px 44px 57px -10px"}}   className="w-[1350px] h-60  bg-green-950 -my-8">
        <h2 className="text-white text-left mx-3 px-8 py-11 text-3xl">
          CarTrade <span className="bg-yellow-700">Tech</span>
        </h2>
        <div
          className="h-8 w-2 bg-orange-500"
          style={{ margin: "-97px 266px", height: "114px", width: "2px" }}
        ></div>
        <div className=" text-yellow-200 text-left px-96 my-2  font-bold text-3xl">
          Olx
        </div>
        <div className=" text-yellow-200 text-left px-96 mx-48 -my-16  font-bold text-xl">
          <img className="h-13 my-4 w-32 " src={img4} alt="" srcSet="" />
        </div>
        <img
          className="h-13 w-24 -my-16"
          style={{ margin: "-112px 17px 42px 795px" }}
          src={tesle}
          alt=""
          srcSet=""
        />
        <img
          className="h-20 w-32 -my-16"
          style={{ margin: "-140px 62px 56px 974px" }}
          src={img5}
          alt=""
          srcSet=""
        />
        <img
          className="h-20 w-32 -my-16"
          style={{ margin: "-140px 62px 56px 1148px" }}
          src={BMW}
          alt=""
          srcSet=""
        />
        <h3 className="text-center text-slate-500 mx-5  -my-9">
          Copyright all rights reserved @2006-2024
        </h3>
      </div>
    </div>
  );
};

export default Footer;
