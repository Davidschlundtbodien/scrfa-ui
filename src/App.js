import {useState} from 'react';
import './App.scss';
import {updates, events} from './mockdata'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import CatagoryIcons from './Components/CatagoryIcons/CatagoryIcons'
import PopularServices from './Components/PopularServices/PopularServices'
import RecentUpdates from './Components/RecentUpdates/RecentUpdates'
import CalenderEvents from './Components/CalenderEvents/CalenderEvents'
import Footer from './Components/Footer/Footer'
import SearchDropDown from './Components/SearchDropDown/SearchDropDown'
import MenuDropDown from './Components/MenuDropDown/MenuDropDown'
import BackToTop from './Components/BackToTop/BackToTop'

function App() {
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)

  const handleClick = (buttonClick) => {
    switch (buttonClick) {
      case 'menu':
        return setMenu(!menu)
      case 'search':
        return setSearch(!search)
      default:
        return
    }
  }

  return (
    <div className="App">
      <NavBar handleClick={handleClick} menuActive={menu} searchActive={search}/>
      {menu && <MenuDropDown/>}
      {search && <SearchDropDown/>}
      <Header/>
      <CatagoryIcons/>
      <PopularServices/>
      <section className="updates-events">
        <RecentUpdates updates={updates}/>
        <CalenderEvents events={events} />
      </section>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
