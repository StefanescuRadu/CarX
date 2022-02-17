import {useState} from "react";
import './App.css';
import {Brands} from './Components/Brands/Brands.tsx';
import Landing from "./Components/LandingPage/Landing.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Manufacturer from "./Components/Manufacturer/Manufacturer.tsx";
import Model from "./Components/Manufacturer/Model.tsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./Components/User_Auth/Register.tsx";
import Login from "./Components/User_Auth/Login.tsx";
import AuthContext from "./Components/AuthContext.tsx";
import UserProfile from "./Components/UserProfile/UserProfile.tsx";
import AddBrand from "./Components/Admin_CRUD/AddBrand.tsx";


function App() {

  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);

  return (
      <BrowserRouter>
        <div className="App">
            {/*<AuthContext.Provider value={{name,setName,email,setEmail}}>*/}
              <Navbar/>
              <Routes>
                <Route path='/'  element= { <Landing/> }/>
                <Route path='/brands'  element={ <Brands/> }/>
                <Route path='/brands/:brand' element={ <Manufacturer/> } />
                <Route path='/brands/:brand/:model' element ={ <Model /> } />
                <Route path='/register' element ={ <Register /> } />
                <Route path='/login' element ={ <Login /> } />
                <Route path ='/users/:name' element={ <UserProfile /> } />
                  <Route path ='/addBrand' element = {<AddBrand />} />
              </Routes>
          {/*<Footer/>*/}
          {/*  </AuthContext.Provider>*/}
        </div>
      </BrowserRouter>
  );
}

export default App;
