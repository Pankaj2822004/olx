// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyProducts = () => {
//   const [myProducts, setMyProducts] = useState([]);

//   useEffect(() => {
//     const fetchMyProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products/myproducts', {
//           headers: {
//             'auth-token': localStorage.getItem('token'),  // Include the auth token
//           },
//         });
//         setMyProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchMyProducts();
//   }, []);

//   if (myProducts.length === 0) {
//     return <div className="text-center text-gray-500 mt-12">No products found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-left my-5">My Products</h1>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {myProducts.map(product => (
//           <li key={product._id} className="bg-white shadow-md rounded-lg p-4">
//             <img 
//               src={product.img} 
//               alt={product.desc} 
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-2">{product.desc}</h2>
//             <p className="text-lg font-bold text-green-600 mb-1">${product.cost}</p>
//             <p className="text-gray-600">{product.Location}</p>
//             <p className="text-gray-500 text-sm">{product.Date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyProducts;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/myproducts', {
          headers: {
            'auth-token': localStorage.getItem('token'),
          },
        });
        setMyProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/messages', {
          headers: {
            'auth-token': localStorage.getItem('token'),
          },
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setError('Error fetching messages');
      }
    };

    const fetchData = async () => {
      await fetchMyProducts();
      await fetchMessages();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (myProducts.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="my-products">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <ul>
        {myProducts.map(product => (
          <li key={product._id} className="mb-4 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold">{product.desc}</h2>
            <img src={product.img} alt={product.desc} className="w-1/2 mt-2" />
            <p className="mt-2">Cost: {product.cost}</p>
            <p className="mt-2">Location: {product.Location}</p>
            <p className="mt-2">Date: {new Date(product.Date).toLocaleDateString()}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Messages:</h3>
              <ul>
                {messages
                  .filter(msg => msg.product._id === product._id)
                  .map((msg) => (
                    <li key={msg._id} className="mt-2 p-2 border border-gray-200 rounded">
                      <p><strong>Message:</strong> {msg.message}</p>
                      <p className="text-sm text-gray-500">{new Date(msg.date).toLocaleString()}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProducts;