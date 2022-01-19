import './MenuDropDown.css'

const MenuDropDown = () => {
  return (
    <div className="menu-dropdown">
      <div className="dropdown-links">
        <p>Home</p>
        <p>News & Events</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Boards & Commitees</p>
      </div>
      <div className="catagory-links">
        <div className="dropdown-catagory-section">
          <p className="catagory-title">Data & Research</p>
          <div className="catagory-spacer"></div>
          <p>Economy</p>
          <p>State Finances</p>
          <p>Education</p>
          <p>Healthcare</p>
          <p>Local Government</p>
          <p>Population and Demographics</p>
          <p>State Register Calculations</p>
          <p>Presentations</p>
        </div>
        <div className="dropdown-catagory-section">
          <p className="catagory-title">Geography & Mapping</p>
          <div className="catagory-spacer"></div>
          <p>Transportation Carrier Network (Uber)</p>
          <p>SC Real Time Network</p>
          <p>SC State GIS</p>
          <p>Maps</p>
          <p>Interactive Mapping</p>
          <p>Statewide Aerial Imagery</p>
        </div>
        <div className="dropdown-catagory-section">
          <p className="catagory-title">Programs & Services</p>
          <div className="catagory-spacer"></div>
          <p>Precinct Demographic and Redistricting</p>
          <p>State 911 Program</p>
          <p>Data Services and Online Solutions</p>
          <p>Geodetic Survey</p>
          <p>Fiscal Analysis</p>
          <p>2020 Census</p>
        </div>
        <div className="dropdown-catagory-section">
          <p className="catagory-title">Legislative Fiscal Impacts</p>
          <div className="catagory-spacer"></div>
          <p>Current General Assembly Session</p>
          <p>Previous General Assembly Session</p>
          <p>Forms</p>
        </div>
      </div>
    </div>
  )
}


export default MenuDropDown;
