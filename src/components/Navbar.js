// import React, { useState, useEffect, useRef, useContext } from "react";
// import image from "../images/plus.png";
// import { Link, useNavigate } from "react-router-dom";
// import Context from "../usecontext/context";
// import axios from "axios";
// import message from "../images/mail.png"
// const Navbar = ({ showAlert, loggedIn, setLoggedIn }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [sellButton, setsellButton] = useState(false);
//   const popupRef = useRef(null);
//   const { addItemToAllCategories } = useContext(Context);
//   let navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     showAlert("Logout Successfully", "success");
//     setLoggedIn(false);
//     navigate("/");
//   };
//   const date = new Date();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!loggedIn) {
//       showAlert("Please login first", "warning");
//       navigate("/login");
//     } else {
//       const formData = new FormData(event.target);

//       const newProduct = {
//         img: formData.get("imagelink"),
//         desc: formData.get("description"),
//         cost: formData.get("price"),
//         Location: formData.get("address"),
//         Date: date.toLocaleDateString('en-GB', {
//           day: 'numeric',
//           month: 'long',
//           year: 'numeric',
//         }),
//         fullName: formData.get("fullName"),
//         type: formData.get("type"),
//         user: loggedIn.userId,  // Add user ID here
//       };

//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.post(
//           "http://localhost:5000/api/products",
//           newProduct,
//           {
//             headers: {
//               'auth-token': token, // Ensure token is sent for authentication
//             },
//           }
//         );
//         console.log("Product added:", response.data);
//         showAlert("Product uploaded successfully", "success");
//         setsellButton(false); // Close the form after submission
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         showAlert("Error submitting form", "danger");
//       }
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       setIsPopupVisible(false);
//       setsellButton(false);
//     }
//   };

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   const SellB = () => {
//     if (!loggedIn) {
//       showAlert("Please login first", "warning");
//       navigate("/login");
//     } else {
//       setsellButton(!sellButton);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-950">
//       <nav className=" border-gray-200 dark:bg-gray-900" style={{    backgroundColor: "gainsboro" ,
//     margin: "-11px 0px -44px 1px" ,
//     padding:" 8px 0px 44px 1px"}}>
//         <div className="mx-4 px-3 " style={{ margin: "13px 16px -35px" }}>

//           <img
//             src="https://cdn-icons-png.flaticon.com/128/3502/3502458.png"
//             className="h-6 mx-7 px-1 bg-blue-500 w-7 rounded-full cursor-pointer"
//             alt="WEBLOGO"
//             onClick={togglePopup}
//           />
//           <li className="-mt-7 text-xl mx-20 font-bold">Webs</li>
//         </div>
//         {isPopupVisible && (
//           <div
//             ref={popupRef}
//             className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-56"
//             style={{
//               left: "1rem",
//               top: "3rem",
//               zIndex: 1000,
//               transition: "opacity 0.3s ease",
//             }}
//           >
//             <ul className="py-2">
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/about">About</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/contactus">Contact Us</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <button onClick={SellB}>Sell</button>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/login">Login</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/myproducts">Myproducts</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
//                 <Link to="/savedcollections">SavedItems</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//         <div
//           className="flex justify-end items-center space-x-80 mx-1 -my-4"
//           style={{ margin: "-33px 120px" }}
//         >
//           <select className="h-8 px-16 mx-80 bg-gray-200 border border-gray-300 rounded-md text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//             <option value="india">India</option>
//             <option value="delhi">Delhi</option>
//             <option value="mumbai">Mumbai</option>
//             <option value="bangalore">Bangalore</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="pune">Pune</option>
//             <option value="kolkata">Kolkata</option>
//             <option value="Indore">Indore</option>
//           </select>
//           {!localStorage.getItem("token") ? (
//             <Link
//               className="text-cyan-700 font-semibold text-xl px-10  hover:text-amber-900"
//               to="/login"
//               role="button"
//             >
//               Login
//             </Link>
//           ) : (
//             <button
//               onClick={handleLogout}

//             className="btn btn-outline-success"
//             style={{
//               backgroundColor: "rgb(204, 150, 183)",
//               width: "85px",
//               height: "42px",
//               border: "3px solid black",
//               fontSize: "17px",
//               color: "black",
//               margin: "1px 6px",
//               borderRadius: "10px",
//             }}
//           >
//               className="btn btn-primary -mx-32 px-0 py-2  transition-colors duration-300"

//               <h3 className="mx-6">Logout</h3>
//             <button/>

//           )}
//           <button
//             type="button"
//             onClick={SellB}
//             style={{
//               margin: "7px -117px 6px 1px",
//               padding: "6px 33px 6px 18px",
//               fontSize: "18px",
//               borderRadius: "23px",
//               border: "2px solid black",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background:
//                 "linear-gradient(to right, #f8b4b4, #f69595, #f6d995)",
//               hover: {
//                 background:
//                   "linear-gradient(to bottom left, #f8b4b4, #f69595, #f6d995)",
//               },
//               focus: {
//                 outline: "none",
//                 ring: "4px solid #f8d4d4",
//                 darkRing: "4px solid #f86060",
//               },
//             }}
//             className="mx-7 h-8 text-gray-900 font-medium rounded-lg text-sm my-4 text-center me-2"
//           >
//             <img className="inline-block h-3 w-4 mr-2" src={image} alt="icon" />
//             Sell
//           </button>
//         </div>
//         {sellButton && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl mx-4 relative mt-12">
//               <button
//                 className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
//                 onClick={() => setsellButton(false)}
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <form
//                 onSubmit={handleSubmit}
//                 className="w-full mx-auto mt-4 p-4 bg-white shadow-md rounded"
//               >
//                 <div className="flex flex-wrap -mx-3 mb-4">
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-full-name"
//                     >
//                       Full Name
//                     </label>
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="fullName"
//                       name="fullName"
//                       type="text"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-description"
//                     >
//                       Description
//                     </label>
//                     <textarea
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="description"
//                       name="description"
//                       placeholder="Enter the product description"
//                       required
//                     ></textarea>
//                   </div>
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-address"
//                     >
//                       Address
//                     </label>
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="address"
//                       name="address"
//                       type="text"
//                       placeholder="Enter your address"
//                       required
//                     />
//                   </div>
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-price"
//                     >
//                       Price
//                     </label>
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="price"
//                       name="price"
//                       type="number"
//                       placeholder="Enter the product price"
//                       required
//                     />
//                   </div>
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-type"
//                     >
//                       Type
//                     </label>
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="type"
//                       name="type"
//                       type="text"
//                       placeholder="Enter the product type"
//                       required
//                     />
//                   </div>
//                   <div className="w-full px-3 mb-4">
//                     <label
//                       className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
//                       htmlFor="grid-image"
//                     >
//                       Image URL
//                     </label>
//                     <input
//                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
//                       id="imagelink"
//                       name="imagelink"
//                       type="text"
//                       placeholder="Enter the image URL"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-center">
//                   <button
//                     className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
//                     type="submit"
//                   >
//                     Upload
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//         <form className="w-[500px] mx-auto mr-72 ">
//           <label
//             htmlFor="default-search"
//             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//           >
//             Search
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="search"
//               id="default-search"
//               className="block w-full h-10 border  -my-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Find Laptop , Cameras , Headphones , mobiles"
//               required
//             />
//             <button
//               type="submit"
//               className="text-white absolute end-2.5 bottom-2.5 -my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef, useContext } from "react";
import image from "../images/plus.png";
import { Link, useNavigate } from "react-router-dom";
import Context from "../usecontext/context";
import axios from "axios";
import message from "../images/mail.png";
const Navbar = ({ showAlert, loggedIn, setLoggedIn }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sellButton, setsellButton] = useState(false);
  const popupRef = useRef(null);
  const { addItemToAllCategories } = useContext(Context);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("Logout Successfully", "success");
    setLoggedIn(false);
    navigate("/");
  };
  const date = new Date();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loggedIn) {
      showAlert("Please login first", "warning");
      navigate("/login");
    } else {
      const formData = new FormData(event.target);

      const newProduct = {
        img: formData.get("imagelink"),
        desc: formData.get("description"),
        cost: formData.get("price"),
        Location: formData.get("address"),
        Date: date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        fullName: formData.get("fullName"),
        type: formData.get("type"),
        user: loggedIn.userId, // Add user ID here
      };

      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:5000/api/products",
          newProduct,
          {
            headers: {
              "auth-token": token, // Ensure token is sent for authentication
            },
          }
        );
        console.log("Product added:", response.data);
        showAlert("Product uploaded successfully", "success");
        setsellButton(false); // Close the form after submission
      } catch (error) {
        console.error("Error submitting form:", error);
        showAlert("Error submitting form", "danger");
      }
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
      setsellButton(false);
    }
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const SellB = () => {
    if (!loggedIn) {
      showAlert("Please login first", "warning");
      navigate("/login");
    } else {
      setsellButton(!sellButton);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
      <nav
        className=" border-gray-200 dark:bg-gray-900"
        style={{
          backgroundColor: "gainsboro",
          margin: "-11px 0px -44px 1px",
          padding: " 8px 0px 44px 1px",
        }}
      >
        <div className="mx-4 px-3" style={{ margin: "13px 16px -35px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3502/3502458.png"
            className="h-6 mx-7 px-1 bg-blue-500 w-7 rounded-full cursor-pointer"
            alt="WEBLOGO"
            onClick={togglePopup}
          />
          <li className="-mt-7 text-xl mx-20 font-bold">Webs</li>
        </div>

        {isPopupVisible && (
          <div
            ref={popupRef}
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-56"
            style={{
              left: "1rem",
              top: "3rem",
              zIndex: 1000,
              transition: "opacity 0.3s ease",
            }}
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/about">About</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <button onClick={SellB}>Sell</button>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/login">Login</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/myproducts">Myproducts</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-gray-700">
                <Link to="/savedcollections">SavedItems</Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="flex justify-end items-center space-x-80 mx-1 -my-4"
          style={{ margin: "-33px 120px", alignItems: "center" }}
        >
          <select className="h-8 px-16 mx-80 bg-gray-200 border border-gray-300 rounded-md text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="india">India</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="pune">Pune</option>
            <option value="kolkata">Kolkata</option>
            <option value="Indore">Indore</option>
          </select>
          {!localStorage.getItem("token") ? (
            <Link
              className="text-cyan-700 text-xl px-10 font-semibold hover:text-amber-900"
              to="/login"
              role="button"
              style={{
                width: "85px",
                display: "flex",
                justifyContent: "center",
              }} // Set fixed width and center alignment
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "rgb(204, 150, 183)",
                width: "85px",
                height: "35px",
                border: "2px solid black",
                fontSize: "17px",
                color: "black",
                margin: "2px 10px 0px",
                borderRadius: "18px",
              }}
              className="btn btn-primary -mx-32 px-0 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <h3 className="mx-6" style={{ margin: "-6px 1px 1px 1px" }}>
                Logout
              </h3>
            </button>
          )}

          <button
            type="button"
            onClick={SellB}
            style={{
              margin: "7px -117px 6px 1px",
              padding: "6px 33px 6px 18px",
              fontSize: "18px",
              borderRadius: "23px",
              border: "2px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(to right, #f8b4b4, #f69595, #f6d995)",
            }}
            className="mx-7 h-8 text-gray-900 font-medium rounded-lg text-sm my-4 text-center me-2"
          >
            <img className="inline-block h-3 w-4 mr-2" src={image} alt="icon" />
            Sell
          </button>
        </div>

        {sellButton && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl mx-4 relative mt-12">
              <button
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
                onClick={() => setsellButton(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <form
                onSubmit={handleSubmit}
                className="w-full mx-auto mt-4 p-4 bg-white shadow-md rounded"
              >
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-full-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-description"
                    >
                      Description
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="description"
                      name="description"
                      placeholder="Enter the product description"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-address"
                    >
                      Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-price"
                    >
                      Price
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="price"
                      name="price"
                      type="number"
                      placeholder="Enter the product price"
                      required
                    />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-type"
                    >
                      Type
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="type"
                      name="type"
                      type="text"
                      placeholder="Enter the product type"
                      required
                    />
                  </div>
                  <div className="w-full px-3 mb-4">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                      htmlFor="grid-image"
                    >
                      Image URL
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="imagelink"
                      name="imagelink"
                      type="text"
                      placeholder="Enter the image URL"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    type="submit"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <form className="w-[500px] mx-auto mr-72 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-10 border  -my-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Find Laptop , Cameras , Headphones , mobiles"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 -my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
