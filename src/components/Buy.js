
import react  , {useState} from "react";
import { useGlobalContext } from "../usecontext/context";


const Buy = () => {
  const { Buy, Allcategories } = useGlobalContext(); 
  const [showChat, setShowChat] = useState(false);
  if (Buy === null) {
    return <div>No item selected</div>;
  }

  const Item = Allcategories[Buy];
  
  return (
    <div className="flex flex-col my-12 lg:flex-row p-4 lg:p-8">
      <div className="lg:w-3/5">
        <img
          className="w-full lg:w-[100%] mx-auto"
          src={Item.img}
          alt="Product"
        />
        <div className="bg-white p-4 mt-4 border border-gray-300 rounded shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">{Item.cost}</h2>
          <p className="text-lg font-medium text-gray-800">{Item.desc}</p>
          <p className="text-gray-600">{Item.Location}</p>
          <p className="text-gray-500 text-sm">Posted on: Jul 20</p>
        </div>
        <div className="bg-white p-4 mt-4 border border-gray-300 rounded shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">{Item.fullName}</h1>
          <button
            className="mt-4 w-full bg-green-600 text-white py-2 rounded"
            onClick={() => setShowChat(true)}
          >
            Chat with seller
          </button>
         
        </div>
      </div>
      <div className="lg:w-2/5 lg:pl-8 mt-8 lg:mt-0">
        <div className="bg-white p-4 border border-gray-300 rounded shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Description</h3>
          <ul className="mt-2 text-gray-700">
            <li><strong>Brand:</strong> ASUS</li>
            <li><strong>Series:</strong> VivoBook 15</li>
            <li><strong>Screen Size:</strong> 15.6 inches</li>
            <li><strong>Colour:</strong> Silver</li>
            <li><strong>CPU Model:</strong> Core i3-10th Gen</li>
            <li><strong>RAM Memory:</strong> 8 GB / 512 GB SSD</li>
            <li><strong>Operating System:</strong> Windows 11 Home</li>
            <li><strong>Special Feature:</strong> Light Weight, Thin</li>
            <li><strong>Graphics Card:</strong> Integrated</li>
            <li><strong>Bill Available, Purchased Date:</strong> 3 February 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Buy;
