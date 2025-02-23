
import { useState , useEffect  } from "react";
import bg from "../images/bg2.jpg";
import bg2 from "../images/log.jpg"
import bg3 from "../images/log2.jpg"
import bg4 from "../images/log3.webp"
import { Link , useNavigate} from "react-router-dom";
export default function Login(props) {
  const images = [bg4, bg2, bg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
let navigate=useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });
  
  const json = await response.json();
  // Check if login is successful
  if (json.success) {
    // Store the received token (correct key is json.authtoken, not json.acc)
    localStorage.setItem("token", json.authtoken);
    localStorage.setItem("user", JSON.stringify(json));
    
    console.log("received token:", json.authtoken); // Ensure token is logged correctly
    
    props.handleLogin(credentials.email);
    props.setLoggedIn(json);
    props.showAlert("Login Successfully", "success");
    navigate("/");
  } else {
    alert("Invalid credentials");
  }
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: credentials.email,
  //       password: credentials.password,
  //     }),
  //   });
  //   const json = await response.json();
  //   // console.log(json);
  //   if (json.success) {
  
  //     localStorage.setItem("token", json.authtoken);
  //     localStorage.setItem("user", JSON.stringify(json));
  //     console.log("received token" ,json.acc);
  //     props.handleLogin(credentials.email);
  //     props.setLoggedIn(json);
  //     props.showAlert("Login Successfully", "success");    
  //     navigate("/");


  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div 
        className="login my-11 h-full" 
        style={{ 
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="flex flex-row max-h-full mx-64 py-12">
          <div     style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }} className="w-[480px] h-[445px] px-40 bg-green-700 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl text-slate-950 font-bold mb-4 whitespace-nowrap">Welcome to webs</h1>
            <p className="text-center font-semibold text-yellow-900 text-xl">Here you can buy 2nd hand laptops, cameras, headphones, mobile phones. Here you can also sell your items.</p>
          </div>
          <div className="w-full bg-gray-300 my-24 py-7 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
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
                    required=""
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
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
               
                  type="submit"
                  className="w-full bg-zinc-500 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



