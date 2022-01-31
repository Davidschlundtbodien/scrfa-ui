import './MenuDropDown.scss'

const MenuDropDown = () => {
  return (
    <div className="menu-dropdown">
      <div className="dropdown-links">
        <a href='#'>Home</a>
        <a href='#'>News & Events</a>
        <a href='#'>About Us</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Boards & Commitees</a>
      </div>
      <div className="catagory-links">
        <div className="dropdown-catagory-section">
          <a href='#' className="catagory-title">Data & Research</a>
          <div className="catagory-spacer"></div>
          <a href='#'>Economy</a>
          <a href='#'>State Finances</a>
          <a href='#'>Education</a>
          <a href='#'>Healthcare</a>
          <a href='#'>Local Government</a>
          <a href='#'>Population and Demographics</a>
          <a href='#'>State Register Calculations</a>
          <a href='#'>Presentations</a>
        </div>
        <div className="dropdown-catagory-section">
          <a href='#' className="catagory-title">Geography & Mapping</a>
          <div className="catagory-spacer"></div>
          <a href='#'>Transportation Carrier Network (Uber)</a>
          <a href='#'>SC Real Time Network</a>
          <a href='#'>SC State GIS</a>
          <a href='#'>Maps</a>
          <a href='#'>Interactive Mapping</a>
          <a href='#'>Statewide Aerial Imagery</a>
        </div>
        <div className="dropdown-catagory-section">
          <a href='#' className="catagory-title">Programs & Services</a>
          <div className="catagory-spacer"></div>
          <a href='#'>Precinct Demographic and Redistricting</a>
          <a href='#'>State 911 Program</a>
          <a href='#'>Data Services and Online Solutions</a>
          <a href='#'>Geodetic Survey</a>
          <a href='#'>Fiscal Analysis</a>
          <a href='#'>2020 Census</a>
        </div>
        <div className="dropdown-catagory-section">
          <a href='#' className="catagory-title">Legislative Fiscal Impacts</a>
          <div className="catagory-spacer"></div>
          <a href='#'>Current General Assembly Session</a>
          <a href='#'>Previous General Assembly Session</a>
          <a href='#'>Forms</a>
        </div>
      </div>
    </div>
  )
}


export default MenuDropDown;
