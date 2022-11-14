import './App.css';
import NavBarComponent from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Banner />
    </div>
  );
}

export default App;
