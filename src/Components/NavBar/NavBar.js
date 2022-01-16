import './NavBar.css'
import logo from '../../assets/RFA Logo Final.png'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-header">
        <button>Menu</button>
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
        <button>Search</button>
      </div>  
    </nav>
  )
}

export default NavBar;
