import React from "react";
import phone from "../../assets/home/phone.jpg"

const Categories = () => {
  return (
    <div className=" flex flex-col max-w-full p-4 gap-3  bg-[#f2f1f1] ">



{/* top starts */}
      <div className="flex justify-between items-center">
        <h2 className=" text-[20px] " >Browse Categories</h2>

        <a href="">See all</a>
      </div>
{/* top ends */}


{/* bottom */}
      <div className="flex  ">
        {
          categories.map((item,i)=>(
            <section className="flex flex-col cursor-pointer   gap-2 w-[25%] justify-center  items-center hover:border-b-[5px] hover:border-b-[#c3c2c2]    "
             key={i} >
              <img src={item.img} className=" w-[60px] h-16 "  alt={item.label} />
              <p> {item.label} </p>
            </section>


          ))
        }

      </div>
    </div>
  );
};

export default Categories;

const categories = [
  {
    img:phone,
    label:'Laptop'
  },
  {
    img:phone,
    label:'Mobile'
  },  {
    img:phone,
    label:'Headphones'
  },  {
    img:phone,
    label:'Camera'
  },
]
