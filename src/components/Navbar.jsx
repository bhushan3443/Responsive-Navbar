import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/main.css";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return ( 
    <header>
      <h1>Logo</h1>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">My Work</a>
        <a href="#">Blogs</a>
        <a href="#">About me</a>
        <a href="#" className="sign-btn">Sign-In</a>
        
        <button className="nav-btn nav-close-btn"  onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button  className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;