// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center py-12">
//       <div className="max-w-4xl w-full mx-auto px-6 lg:px-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center">Contact Us</h1>
//         <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
//           We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
//         </p>
//         <form className="mt-10 space-y-6">
//           <div className="flex flex-col md:flex-row md:space-x-6">
//             <div className="flex-1">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="Your name"
//               />
//             </div>
//             <div className="flex-1 mt-6 md:mt-0">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
//                 placeholder="Your email"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Query/Suggestion</label>
//             <textarea
//               id="query"
//               rows="5"
//               className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
//               placeholder="Your query or suggestion"
//             ></textarea>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure the URL matches the backend route you've set up
      const response = await axios.post('http://localhost:5000/api/contact', formData); 
      alert(response.data.message);
      setFormData({ name: '', email: '', query: '' }); // Clear the form after successful submission
    } catch (error) {
      console.error('Error submitting contact form:', error);
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.error || 'Something went wrong!'}`);
      } else {
        alert('There was an error submitting your query.');
      }
    }
  };
  
  

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center">
          We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
        </p>
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Query/Suggestion</label>
            <textarea
              id="query"
              rows="5"
              className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your query or suggestion"
              value={formData.query}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;



