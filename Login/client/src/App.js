import React from "react";
import { Route,Link } from "react-router-dom";
import Login from "./Pages/Login";

const App=()=>{
  return(
    <div>
      <Link to="/login">Login</Link>
      <Route path="/login" component={Login}></Route>
    </div>
  )
}

export default App