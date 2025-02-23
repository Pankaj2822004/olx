

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../images/bg2.jpg";
import bg2 from "../images/log.jpg";
import bg3 from "../images/log2.jpg";
import bg4 from "../images/log3.webp";

export default function Signup(props) {
  const images = [bg4, bg2, bg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, address } = credentials;
    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, address }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const json = await response.json();
  
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.setLoggedIn(true);
        props.handleLogin(credentials.email);
        props.showAlert("Account created Successfully", "success");
      } else {
        alert(`Error creating user: ${json.error}`);
      }
    } catch (error) {
      console.error("There was an error creating the user!", error);
      alert(`Error creating user: ${error.message}`);
    }
  };
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="login my-11 h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row max-h-full mx-64 py-2">
          <div
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[480px] h-[550px] border border-l-zinc-950 border-r-zinc-950 border-t-zinc-950 px-40 bg-green-700 flex flex-col justify-center items-center text-white"
          >
            <h1 className="text-4xl text-slate-950 font-bold mb-4 whitespace-nowrap">
              Welcome to Webs
            </h1>
            <p className="text-center font-semibold text-yellow-900 text-xl">
              Here you can buy 2nd hand laptops, cameras, headphones, and mobile
              phones. Here you can also sell your items.
            </p>
          </div>
          <div className="w-full bg-gray-300 my-24 py-7 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={credentials.name}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={credentials.email}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={credentials.password}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={onChange}
                    value={credentials.address}
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-zinc-500 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
