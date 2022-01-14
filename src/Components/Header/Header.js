import './Header.css'
import shutterstock_42474535 from '../../assets/shutterstock_42474535.jpg'


const Header = () => {
  return (
    <header style={{backgroundImage: "url(" + shutterstock_42474535 + ")"} }>
      <section>
        <h1>Providing independent research, analysis, and resources to facilitate informed policy decisions and administration of services</h1>
        <input placeholder={'Search rfa.sc.gov'}></input>
        <button>Search</button>
      </section>
    </header>
  )
}

export default Header;
