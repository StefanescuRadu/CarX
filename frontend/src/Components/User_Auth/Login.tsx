import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import {ReactSession} from 'react-client-session';


interface User {

    name: string,
    email: string,
    favourites: []

}
interface Data {
    email: string,
    password: string
}

interface Message{
    status: string,
    message: string
}

const Login = () => {
    const params = new URLSearchParams();

    const[logedIn,setLogedIn] = useState<User>({
        name: null,
        email: null,
        favourites: null

    })

    const [message,setMessage] = useState<Message>({
        status: null,
        message: null
    })
    const [user,setUser] = useState<Data>({
        email:null,
        password: null
    })
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPost();

    };
    const headers =  {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    const fetchPost = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(user))
        params.append("email",user.email);
        params.append("password",user.password)
        try{
            // const response = await axios.post('http://localhost:8080/users/login',
            //     JSON.stringify(user),
            //     {
            //         headers : headers
            //     }
            const response = await axios.post("http://localhost:8080/users/login",params,{
                headers: headers
            });
            console.log(response.data)
            setMessage({status:response.data.status,message:response.data.message})



        }
        catch (err){
            console.log(err.response.data.errors)
        }
    }
    useEffect(() => {
        console.log("A")
        const result = async () => {
            const response = await axios('http://localhost:8080/users/user/' + user.email,);

            setLogedIn({name:response.data.name, email:response.data.email,favourites:response.data.favourites})

        }
        if(message.status == "OK"){
            result();
            ReactSession.setStoreType("localStorage");
            ReactSession.set("username", "Bob");
        }

    }, [message.status]);

    return(
        <div className="flex">

            <div>
                {message.status == "OK" ? <h1 className="ml-[40px] relative top-[130px] text-[40px] text-green-500">{message.message}</h1>
                    : <h1 className="relative top-[130px] text-[40px] text-red-500">{message.message}</h1>}

                <form className="relative top-[200px] ml-[30px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[30px] w-[970px] flex flex-col justify-center items-center"
                      onSubmit = {handleSubmit} autoComplete="new-password">

                    <div>
                        <label className="block mt-[12px]" htmlFor="email" >Email</label>
                        <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="email" id="email" name="email" placeholder="Email" autoComplete="none"required onChange={(e) =>setUser({...user,email:e.target.value})}/>

                    </div>
                    <div>
                        <label className="block mt-[12px]" htmlFor="password" >Password</label>
                        <input className="mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               type="password" id="password" name="password" placeholder="Password" autoComplete="none"  required onChange={(e) =>setUser({...user,password:e.target.value})} />
                    </div>

                    <button className="bg-amber-500 mt-[30px] hover:bg-amber-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                </form>
            </div>
            <div className="relative">
                <img className="w-[900px] h-[880px] ml-[60px]" src={require('./login_resized .jpg')} />
                <div className ="absolute top-[300px] left-[250px] text-amber-700 text-[50px] flex flex-col justify-center items-center">
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