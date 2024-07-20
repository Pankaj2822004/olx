import React from "react";

const Navbar = () => {
  return (
    <div className=" flex  flex-col gap-4   ">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3502/3502458.png"
          className="h-6 mx-7 my-2 px-1 bg-blue-500 w-7 rounded-full"
          alt="WEBLOGO"
        />

        <h1 className="-mt-8 ml-20 font-bold">Webs</h1>
        <div className="buttons text-right -my-6 mx-8 space-x-7">
          <button className="text-right text-black ">Login</button>
          <button className="h-8 px-3 bg-sky-400">Signup</button>
        </div>
      </nav>

        <div className=" p-3 flex items-center gap-3  border rounded-md w-[96%]  self-center      ">
        <svg
            // className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m-2.62-2.62a7.5 7.5 0 1110.59-10.59 7.5 7.5 0 01-10.59 10.59z"
            />
          </svg>
          <input
            type="text"
            placeholder="Find Laptop Cameras Speakers"
            className=" focus:outline-none w-full focus:border-none border-none    "
          />
 
        </div>
    </div>
  );
};

export default Navbar;
