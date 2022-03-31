import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import RegisterImg from "../../assets/resized_register .jpg";

interface Data {
    name: string,
    email: string,
    password: string
}

interface Message {
    status: string,
    message: string
}

const Register = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<Message>({
        status: null,
        message: null
    })
    const [user, setUser] = useState<Data>({
        name: null,
        email: null,
        password: null
    })
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPost();

    };
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const fetchPost = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(user))
        try {
            const response = await axios.post('http://localhost:8080/users/register',
                JSON.stringify(user),
                {
                    headers: headers
                }
            );
            console.log(response.data);
            setMessage({status: response.data.status, message: response.data.message})
        } catch (err) {
            console.log(err.response.data.errors)
        }
    }

    const redirect = () => {
        navigate("/login")
    }
    useEffect(() => {


        if (message.status == "OK") {
            redirect();
            return () => {
                setMessage({status: null, message: null})
            }
        }

    }, [message.status]);


    return (
        <div className="flex">

            <div className="relative">
                <img className="w-[900px] h-[880px] ml-[150px]" alt="image" src={RegisterImg}/>
                <div
                    className="text-auth">
                    <h1 className="relative left-[130px]">Already a member ?</h1>
                    <Link className="relative left-[100px] top-[50px]" to="/login">
                        <h2 className="bg-amber-500 mt-[12px] hover:bg-amber-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Login</h2>
                    </Link>
                </div>

            </div>


            <div>

                {/*<h1 className={"ml-[40px] relative top-[130px] text-[40px]" + (message.status ==="OK" ?*/}
                {/*    'text-green-500': 'text-red-500')*/}
                {/*}>*/}
                {/*    {message.message}*/}
                {/*</h1>*/}
                {message.status == "OK" ?
                    <h1 className="ml-[40px] relative top-[130px] text-[40px] text-green-500">{message.message}</h1>
                    : <h1 className="relative top-[130px] text-[40px] text-red-500">{message.message}</h1>}

                <form className="auth-form"
                    // className="relative top-[150px] ml-[50px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[30px] w-[800px] flex flex-col justify-center items-center"
                      onSubmit={handleSubmit} autoComplete="new-password">
                    <div>
                        <label className="block mt-[12px]" htmlFor="username">Username</label>
                        <input
                            className="input-form"
                            type="text" id="username" name="username" placeholder="Username" autoComplete="none"
                            required onChange={(e) => setUser({...user, name: e.target.value})}/>
                    </div>
                    <div>
                        <label className="block mt-[12px]" htmlFor="email">Email</label>
                        <input
                            className="input-form"
                            type="email" id="email" name="email" placeholder="Email" autoComplete="none" required
                            onChange={(e) => setUser({...user, email: e.target.value})}/>

                    </div>
                    <div>
                        <label className="block mt-[12px]" htmlFor="password">Password</label>
                        <input
                            className="input-form"
                            type="password" id="password" name="password" placeholder="Password" autoComplete="none"
                            required onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>

                    <button
                        className="btn-blue"
                        type="submit">Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
