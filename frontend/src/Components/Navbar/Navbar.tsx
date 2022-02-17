import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {ReactSession} from 'react-client-session';
const Navbar = () =>{
    const [name,setName] = useState(null);
    const [logged,setLogged] = useState(false);

    useEffect(()=>{
        console.log("Name changed")
    },[name])

    const getUsername = () =>{
        let name = ReactSession.get("username");
        if(name) {
            setName(name);
        }
    }

    getUsername();
    return(
        <nav className="flex justify-around items-center w-full h-[60px]
        text-[30px] font-nav text-white bg-gradient-to-l from-neutral-700 to-neutral-900">
            <Link to="/">
                <FontAwesomeIcon className="text-[45px] hover:text-red-500" icon={faDragon} />
                </Link>
            <Link to="/brands">Brands</Link>
            <Link to="/">CarX</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            {name && <h1>{name}</h1>  }
        </nav>
    )
}

export default Navbar;