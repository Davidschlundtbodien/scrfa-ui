import './Footer.css'
import logo from '../../assets/Group 262.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h2>South Carolina Revenue and Fiscal Affairs Office</h2>
        <img src={logo} alt="SCRFA logo"/>
      </div>
      <div className="footer-section">
        <ul>
          <li>Privacy Statements</li>
          <li>FOIA</li>
          <li>Disclosures and Reporting</li>
          <li>Report Fraud</li>
          <li>Accessibility</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <div className="office-address">
          <h3>Main Office</h3>
          <p>1000 Assembly St. Rembert Dennis Building, Suite 421</p>
          <p>Columbia, SC 29201</p>
        </div>
        <div className="office-address">
          <h3>Geodetic Survey Section</h3>
          <p>S Geology Rd</p>
          <p>Columbia, SC 29212</p>
        </div>
        <div className="office-address">
          <h3>Health and Demographics Division</h3>
          <p>1000 Assembly St. Rembert Dennis Building, Suite 420</p>
          <p>Columbia, SC 29201</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
