import { useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDragon} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import AuthContext from "../AuthContext.tsx";
import {useAtom} from 'jotai'
import {USER_NAME,USER_EMAIL,USER_TYPE} from "../../Store"


const Navbar = () =>{
    // const {name,email} = useContext(AuthContext);
    const [name,setName] = useAtom(USER_NAME);
    const[email,setEmail] = useAtom(USER_EMAIL);
    const [userType,setUserType] = useAtom(USER_TYPE)
    const navigate = useNavigate();

    const logout = () =>{
        setName(null)
        setEmail(null)
        setUserType(null)
        navigate("/")
    }
    return(
        <nav className="flex justify-around items-center w-full h-[60px]
        text-[30px] font-nav text-white bg-gradient-to-l from-neutral-700 to-neutral-900">
            <Link to="/">
                <FontAwesomeIcon className="text-[45px] hover:text-red-500" icon={faDragon} />
                </Link>
            <Link to="/brands">Brands</Link>
            <Link to="/">CarX</Link>

            {
               name ? <>

                   <Link to={`/users/${name}`}>{name}</Link>
                   <button onClick={logout}>Logout</button>
                   </> :

                   <>

                   <Link to="/login">Login</Link>
                   <Link to="/register">Register</Link>
                   </>
            }


        </nav>
    )
}

export default Navbar;
