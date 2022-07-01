import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatepList from "./pages/CreatepList";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { MyProfile } from "./pages/MyProfile";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpList"> Add-PlayList </Link>
            <Link to="/myprofile">My Profile</Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/myprofile" element={<MyProfile isAuth={isAuth} />} />
        <Route path="/createpList" element={<CreatepList isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
