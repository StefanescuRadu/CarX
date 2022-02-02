import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav className="flex justify-around items-center w-full h-[60px]
        text-[30px] font-nav text-white bg-gradient-to-l from-neutral-700 to-neutral-900">
            <Link to="/">
                <img className="h-[55px]" src={require("./logo.jpg")} alt="logo"/>
                </Link>
            <Link to="/brands">Brands</Link>
            <Link to="/">CarX</Link>
            <h1>Login</h1>
            <h1>Register</h1>
        </nav>
    )
}

export default Navbar;