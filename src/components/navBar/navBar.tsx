
// import './navBar.css'

// const NavBar = () => {
//   return (
//     <div className='navbar'>
//         <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="netflix-logo" />

// <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="nav" />      
//     </div>
//   )
// }

// export default NavBar
import { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/netflix_react_assets/assets/logo.png";
import search_icon from "../../assets/netflix_react_assets/assets/search_icon.svg";
import bell_icon from "../../assets/netflix_react_assets/assets/bell_icon.svg";
import profile_img from "../../assets/netflix_react_assets/assets/profile_img.png";
import caret_icon from "../../assets/netflix_react_assets/assets/caret_icon.svg";
import { Logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

   const handleScroll = () => {
      if (navRef.current) {
      if (window.scrollY >= 80) {
       

          navRef.current.classList.add("nav-dark");
        
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    }
   }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{Logout()}}>SignOut of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
