import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayHeader from "./components/DisplayHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
