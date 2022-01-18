import './NavBar.css'
import logo from '../../assets/RFA Logo Final.png'
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const NavBar = ({handleClick}) => {
  return (
    <nav>
      <div className="nav-header">
        <button onClick={() => handleClick('menu')} className="nav-menu"> <FiMenu className="menu-icon"/> Menu</button>
        <img src={logo} alt="SCRFA logo"/>
        <div className="nav-title">
          <p>South Carolina</p>
          <p>Revenue and Fiscal Affairs Office</p>
          <p>Transforming data into solutions for South Carolina</p>
        </div>
      </div>
      <div className="nav-links">
        <a>About Us</a>
        <a>Events</a>
        <a>Boards & Commitees</a>
        <button onClick={() => handleClick('search')} className="nav-search active"><FaSearch className="search-icon active"/></button>
      </div>
    </nav>
  )
}

export default NavBar;
