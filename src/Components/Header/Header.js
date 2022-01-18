import './Header.css'
import shutterstock_42474535 from '../../assets/shutterstock_42474535.jpg'
import { FaSearch } from "react-icons/fa";



const Header = () => {
  return (
    <header style={{backgroundImage: "url(" + shutterstock_42474535 + ")"} }>
      <section>
        <h1>Providing independent research, analysis, and resources to facilitate informed policy decisions and administration of services</h1>
        <div className="input-search">
          <input placeholder={'Search rfa.sc.gov'}></input>
          <button className="header-search">Search  <FaSearch className="search-icon active"/></button>
        </div>
      </section>
    </header>
  )
}

export default Header;
