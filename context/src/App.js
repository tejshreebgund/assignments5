// import logo from './logo.svg';
import {Navbar} from "./components/Navbar";
import {LoginStatus} from "./components/LoginStatus";
import {useState, useContext} from "react";
import {AuthContext} from "./contexts/AuthContext";
import './App.css';

function App() {

  const {isAuth, token} = useContext(AuthContext);
  return (
    <div className="App">
     <Navbar></Navbar>
     <div>
       {
        token === "" ? (<div>Login first</div>) : (<div>your are loged in . your token is {token} </div>)
       }
     </div>
    </div>
  );
}

export default App;
