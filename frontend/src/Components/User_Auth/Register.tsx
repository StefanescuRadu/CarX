import { useState } from "react";
import {Link} from "react-router-dom";

interface Data {
    username: string,
    email: string,
    password: string
}

const Register = () => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    // const reRef = useRef<ReCAPTCHA>();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("It works!")
    };
   return(
       <div className="flex">

            <div className="relative">
           <img className="w-[900px] h-[880px] ml-[60px]" src={require('./Register.jpg')} />
                <div className ="absolute top-[300px] left-[250px] text-amber-700 text-[50px] flex flex-col justify-center items-center">
                    <h1>Already a member ?</h1>
                    <Link className="p-[30px]" to="/login">
                        <h2 className="bg-amber-500 mt-[12px] hover:bg-amber-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Login</h2>
                    </Link>
                </div>

            </div>




                <form className="ml-[30px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[30px] w-[970px] flex flex-col justify-center items-center"
                      onSubmit = {handleSubmit} autoComplete="new-password">
                   <div>
                       <label className="block mt-[12px]" htmlFor="username" >Username</label>
                       <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" id="username" name="username" placeholder="Username" autoComplete="none"  required />
                   </div>
                   <div>
                       <label className="block mt-[12px]" htmlFor="email" >Email</label>
                       <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="email" id="email" name="email" placeholder="Email" autoComplete="none"required />

                   </div>
                   <div>
                       <label className="block mt-[12px]" htmlFor="password" >Password</label>
                       <input className="mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="password" id="password" name="password" placeholder="Password" autoComplete="none"  required />
                   </div>

                   <button className="bg-blue-500 mt-[12px] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
                </form>
       </div>
   )
}

export default Register