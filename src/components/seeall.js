
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../usecontext/context";
import img from "../images/back (2).png";

export default function Seeall() {
  const navigate = useNavigate();
  const { setSelectedCategory } = useGlobalContext();

  const back = () => {
    navigate("/");
  };

  const handleCategoryClick = (type) => {
    console.log("Category clicked:", type); // Debugging log
    setSelectedCategory(type);
    navigate("/category");
  };

  return (
    <>
      <div className="bg-white my-14 w-[1348px] h-[576px]">
        <div className="container flex-col py-4 space-y-4 mx-8 space-x-3">
          <div className="text-xl m-[-29px] w-[1345px] h-16 bg-slate-200 font-bold -my-4">
            <img
              onClick={back}
              src={img}
              style={{ height: "25px", width: "25px", margin: "-20px 2px -25px 2px", cursor: "pointer" }}
              alt=""
            />
            <h1 className="mx-8 -my-5">All categories</h1>
          </div>
          <div  onClick={() => handleCategoryClick('laptop')} style={{ margin: "-4px -31px" }} className=" cursor-pointer border-b-[1px] border-black py-2 h-10 bg-slate-100 m-[-25px] mx-4 w-[1345px] hover:bg-slate-200">
            <h1 className="mx-6">Laptops</h1>
          </div>
          <div  onClick={() => handleCategoryClick('camera')} style={{ margin: "4px -33px" }} className="cursor-pointer border-b-[1px] border-black py-2 h-10 bg-slate-100 m-[-50px] mx-4 w-[1345px] hover:bg-slate-200">
            <h1 className="mx-6">Cameras</h1>
          </div>
          <div  onClick={() => handleCategoryClick('mobile')} style={{ margin: "4px -33px" }} className="cursor-pointer border-b-[1px] border-black py-2 h-10 bg-slate-100 m-[-25px] mx-4 w-[1345px] hover:bg-slate-200">
            <h1 className="mx-6">Mobiles</h1>
          </div>
          <div  onClick={() => handleCategoryClick('headphone')} style={{ margin: "4px -33px" }} className="cursor-pointer border-b-[1px] border-black py-2 h-10 bg-slate-100 m-[-25px] mx-4 w-[1345px] hover:bg-slate-200">
            <h1 className="mx-6">Headphones</h1>
          </div>
          <div  onClick={() => handleCategoryClick('earbud')} style={{ margin: "-4px -33px" }} className="cursor-pointer border-b-[1px] border-black py-2 h-10 bg-slate-100 m-[-25px] mx-4 w-[1345px] hover:bg-slate-200">
            <h1 className="mx-6">Earbuds</h1>
          </div>
         
        </div>
      </div>
    </>
  );
}
