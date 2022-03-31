import './App.css';
import {Brands} from './Components/brands/Brands.tsx';
import Landing from "./Components/landing-page/Landing.tsx";
import Navbar from "./Components/navbar/Navbar.tsx";
import Manufacturer from "./Components/manufacturer/Manufacturer.tsx";
import Model from "./Components/manufacturer/Model.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from "./Components/user-authentication/Register.tsx";
import Login from "./Components/user-authentication/Login.tsx";
import UserProfile from "./Components/user-profile/UserProfile.tsx";
import AddBrand from "./Components/admin-crud/AddBrand.tsx";
import AddCar from "./Components/admin-crud/AddCar.tsx";
import Map from "./Components/map/Map.tsx";
import {useState,useEffect} from "react";
import {loadMapApi} from "./utils/GoogleMapsUtils.ts";
import EditCar from "./Components/admin-crud/EditCar.tsx";
import Configuration from "./Components/car-configuration/Configuration.tsx";

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
                    <Route path='/edit/:brand/:model' element={<EditCar/>}/>
                    <Route path='/brands/:brand/:model' element={<Model/>}/>
                    <Route path='/brands/:brand/:model/configure' element={<Configuration/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/users/:name' element={<UserProfile/>}/>
                    <Route path='/addBrand' element={<AddBrand/>}/>
                    <Route path='/addCar' element={<AddCar/>}/>
                    {scriptLoaded &&
                    <Route path='/map/:brand'
                           element={<Map
                               mapType={google.maps.MapTypeId.ROADMAP}
                               mapTypeControl ={true} />}/>}

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
