import { useState } from "react";
import './App.css'
import logo from "./assets/world-svgrepo-com.svg"


const Navbar = () =>{

    return(
        <div className="navbar-container">
        <img src= {logo} alt="logo" />
        <h2 className="navbar-text"> my travel journal</h2>
           
        </div>
        
    )

}


export default Navbar