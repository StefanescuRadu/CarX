import './App.css';
import {Brands} from './Components/Brands/Brands.tsx';
import Landing from "./Components/LandingPage/Landing.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import Manufacturer from "./Components/Manufacturer/Manufacturer.tsx";
import Model from "./Components/Manufacturer/Model.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from "./Components/User_Auth/Register.tsx";
import Login from "./Components/User_Auth/Login.tsx";
import UserProfile from "./Components/UserProfile/UserProfile.tsx";
import AddBrand from "./Components/Admin_CRUD/AddBrand.tsx";
import AddCar from "./Components/Admin_CRUD/AddCar.tsx";
import Map from "./Components/Map/Map.tsx";
import {useState,useEffect} from "react";
import {loadMapApi} from "./utils/GoogleMapsUtils.ts";

function App() {
    const google = window.google;
    const[scriptLoaded,setScriptLoaded] = useState(false);

    useEffect(() =>{
        const googleMapsScript = loadMapApi();
        googleMapsScript.addEventListener("load",()=>{
            setScriptLoaded(true);
        })
    },[]);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/brands' element={<Brands/>}/>
                    <Route path='/brands/:brand' element={<Manufacturer/>}/>
                    <Route path='/brands/:brand/:model' element={<Model/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/users/:name' element={<UserProfile/>}/>
                    <Route path='/addBrand' element={<AddBrand/>}/>
                    <Route path='/addCar' element={<AddCar/>}/>
                    {scriptLoaded &&
                    <Route path='/map/:brand'
                           element={<Map
                               mapType={google.maps.MapTypeId.HYBRID}
                               mapTypeControl ={true}
                           />}
                    />
                    }

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
