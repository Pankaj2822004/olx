import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/BrowseCategories";
import Footer from "./components/Footer";
import Login from "./components/login";
import Signup from "./components/signup";
import Seeall from "./components/seeall";
import States from "./usecontext/states";
import CategoryItems from "./components/Choosecategory";
import About from "./components/About";
import Contact from "./components/contactus";
import Buy from "./components/Buy";
import Alert from "./components/Alert";
import UserLogo from "./components/UserLogo";

function App() {
  const [alert, setalert] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const handleLogin = (email) => {
    setUserEmail(email);
    setLoggedIn(true);
    showAlert("Successfully logged in", "success");
  };

  return (
    <States>
      <Router>
        <div>
          <Navbar showAlert={showAlert} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Category loggedIn={loggedIn} setLoggedIn={setLoggedIn} showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert} setLoggedIn={setLoggedIn} handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} setLoggedIn={setLoggedIn} handleLogin={handleLogin} />} />
            <Route path="/seeall" element={<Seeall />} />
            <Route path="/category" element={<CategoryItems />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>
        </div>
      </Router>
      {loggedIn && <UserLogo email={userEmail} />}
    </States>
  );
}

export default App;