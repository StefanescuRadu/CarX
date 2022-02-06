import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDragon} from "@fortawesome/free-solid-svg-icons";
const Navbar = () =>{
    return(
        <nav className="flex justify-around items-center w-full h-[60px]
        text-[30px] font-nav text-white bg-gradient-to-l from-neutral-700 to-neutral-900">
            <Link to="/">
                <FontAwesomeIcon className="text-[45px] hover:text-red-500" icon={faDragon} />
                </Link>
            <Link to="/brands">Brands</Link>
            <Link to="/">CarX</Link>
            <h1>Login</h1>
            <Link to="/register">Register</Link>
        </nav>
    )
}

export default Navbar;