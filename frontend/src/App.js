
import './App.css';
import {Brands} from './Components/Brands/Brands.tsx';
import Landing from "./Components/LandingPage/Landing.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Manufacturer from "./Components/Manufacturer/Manufacturer.tsx";
import Model from "./Components/Manufacturer/Model.tsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./Components/User_Auth/Register.tsx";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/'  element={<Landing/>}/>
            <Route path='/brands'  element={<Brands/>}/>
            <Route path='/brands/:brand' element={<Manufacturer/>} />
            <Route path='/brands/:brand/:model' element ={<Model />} />
              <Route path='/register' element ={<Register />} />
          </Routes>
          {/*<Footer/>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
