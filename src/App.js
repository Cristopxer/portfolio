import './App.css';
import NavBarComponent from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import Skills from "./Components/Skills/Skills"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
