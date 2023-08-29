import React, { useState } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/login";
import CreatePost from "./Pages/Createpost";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

function App() {

  const[isAuth, setIsAuth] = useState(localStorage.getItem("isAuths"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    }) 
  }

  return(
    <div>
      <Router>
      <nav>
        <Link to="/">Home</Link>


       {!isAuth? (<Link to="/login">Login</Link>) : 
        (<>
        <Link to="/createpost">CreatePost</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
      )}
       

      </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/Createpost" element={<CreatePost />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;