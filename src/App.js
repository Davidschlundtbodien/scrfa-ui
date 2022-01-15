import './App.css';
import updates from './mockdata'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import CatagoryIcons from './Components/CatagoryIcons/CatagoryIcons'
import PopularServices from './Components/PopularServices/PopularServices'
import RecentUpdates from './Components/RecentUpdates/RecentUpdates'
import CalenderEvents from './Components/CalenderEvents/CalenderEvents'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <CatagoryIcons/>
      <PopularServices/>
      <RecentUpdates updates={updates}/>
      <Footer/>
    </div>
  );
}

export default App;
