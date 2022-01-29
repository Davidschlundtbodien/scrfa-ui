import './NavBar.css'
import logo from '../../assets/RFA Logo Final.png'
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const NavBar = ({handleClick, menuActive, searchActive}) => {
  return (
    <nav>
      <div className="nav-header">
        {menuActive && <button onClick={() => handleClick('menu')} className="nav-menu"> <AiOutlineClose className="menu-icon"/> Close</button>}
        {!menuActive && <button onClick={() => handleClick('menu')} className="nav-menu"> <FiMenu className="menu-icon"/> Menu</button>}
        <img src={logo} alt="SCRFA logo"/>
        <div className="nav-title">
          <p>South Carolina</p>
          <p>Revenue and Fiscal Affairs Office</p>
          <p>Transforming data into solutions for South Carolina</p>
        </div>
      </div>
      <div className="nav-search">
        <div className="nav-links">
          <a href='#'>About Us</a>
          <a href='#'>Events</a>
          <a href='#'>Boards & Commitees</a>
        </div>
        {searchActive &&  <button aria-label="Search drop down active" onClick={() => handleClick('search')} className="search-section active"><FaSearch className="search-icon active"/></button>}
        {!searchActive &&  <button aria-label="Search drop down inactive" onClick={() => handleClick('search')} className="search-section"><FaSearch className="search-icon"/></button>}
      </div>
    </nav>
  )
}

export default NavBar;
