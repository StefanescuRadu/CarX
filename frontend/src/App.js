
import './App.css';
import {Brands} from './Components/Brands/Brands.tsx';
import Landing from "./Components/LandingPage/Landing.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Developement", to: "/dev" },
    { name: "Graphic Design", to: "/design" },
    { name: "Contact", to: "/contact" },
  ]
}

const {brand,links} = navigation;
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/'  element={<Landing/>}/>
            <Route path='/brands'  element={<Brands/>}/>
          </Routes>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
