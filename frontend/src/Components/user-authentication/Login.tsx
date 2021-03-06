import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {ReactSession} from 'react-client-session';
import {useAtom} from 'jotai'
import {USER_EMAIL, USER_NAME, USER_TYPE} from "../../Store"
import LoginImg from "../../assets/login_resized .jpg";

interface User {
    name: string,
    email: string,
    favourites: []
}

interface Data {
    email: string,
    password: string
}

interface Message {
    status: string,
    message: string
}

const Login = () => {

    const params = new URLSearchParams();
    const navigate = useNavigate();
    ReactSession.setStoreType("localStorage");
    const [name, setName] = useAtom(USER_NAME);
    const [email, setEmail] = useAtom(USER_EMAIL);
    const [userType, setUserType] = useAtom(USER_TYPE);

    const [logedIn, setLogedIn] = useState<User>({
        name: null,
        email: null,
        favourites: null

    })

    const [message, setMessage] = useState<Message>({
        status: null,
        message: null
    })

    const [user, setUser] = useState<Data>({
        email: null,
        password: null
    })
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPost();

    };
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const redirect = () => {
        navigate("/");
    }

    const setMessageNull = () => {
        setMessage({status: null, message: null})
    }

    const fetchPost = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(user))
        params.append("email", user.email);
        params.append("password", user.password)
        try {
            const response = await axios.post("http://localhost:8080/users/login", params, {
                headers: headers
            });
            const data = await response.data;
            console.log(data)
            setMessage({status: data.status, message: data.message})
            let token = data["acces-token"];
            ReactSession.set("token", token);
        } catch (err) {
            setMessage({status: "Bad", message: "Wrong username or password"})
            setTimeout(setMessageNull, 3000)
        }
    }

    useEffect(() => {
        console.log("A")
        const result = async () => {
            const response = await axios('http://localhost:8080/users/user/' + user.email,);
            console.log(response);
            setLogedIn({name: response.data.name, email: response.data.email, favourites: response.data.favourites})
            ReactSession.set("email", response.data.email);
            ReactSession.set("username", response.data.name);
            console.log(response.data.roles[0].name)
            // ReactSession.set("userType",response.data.roles[0].name)
            setName(response.data.name)
            setEmail(response.data.email)
            setUserType(response.data.roles[0].name)
        }
        if (message.status == "OK") {
            result();
            redirect();
            return () => {
                setMessage({status: null, message: null})
            }
        }
    }, [message.status]);


    return (
        <div className="flex">

            <div>
                {message.status == "OK" ?
                    <h1 className="ml-[40px] relative top-[130px] text-[40px] text-green-500">{message.message}</h1>
                    : <h1 className="relative top-[130px] ml-[100px] text-[40px] text-red-500">{message.message}</h1>}

                <form className="auth-form" onSubmit={handleSubmit} autoComplete="new-password">
                    <div>
                        <label className="block mt-[12px]" htmlFor="email">Email</label>
                        <input className="input-form" type="email" id="email" name="email" placeholder="Email"
                               autoComplete="none" required
                               onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>
                    <div>
                        <label className="block mt-[12px]" htmlFor="password">Password</label>
                        <input className="input-form" type="password" id="password" name="password"
                               placeholder="Password" autoComplete="none" required
                               onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                    <button className="btn-blue" type="submit">Login</button>
                </form>
            </div>
            <div className="relative">
                <img className="w-[900px] h-[880px] ml-[60px]" src={LoginImg}/>
                <div
                    className="text-auth">
                    <h1 className="relative left-[80px]">Not a member ?</h1>
                    <Link className="p-[30px]" to="/register">
                        <h2 className="relative left-[90px] bg-red-500 mt-[12px] hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Register</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
