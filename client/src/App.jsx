import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayHeader from "./components/DisplayHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Privateroute from "./components/Privaterou";
import Listingpage from "./pages/Listingpage";
import Updatelisting from "./pages/Updatelisting";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import "./styles.css";

function App() {
  return (
    <div className="quicksand">
      <Router>
        <Routes>
          <Route path="/" element={<DisplayHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listingcreated/:listingId" element={<Listing />} />
            <Route path="/search" element={<Search />} />

            <Route element={<Privateroute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/listing" element={<Listingpage />} />
              <Route
                path="/updatelisting/:listingId"
                element={<Updatelisting />}
              />
            </Route>
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
