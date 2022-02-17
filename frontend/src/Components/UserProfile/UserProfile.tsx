import axios from "axios";
import {useAtom} from "jotai";
import {USER_EMAIL} from "../../Store"
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
const UserProfile = () => {

    const[email,setEmail] = useAtom(USER_EMAIL);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const result = async () => {
            try{
                const response = await axios.get("http://localhost:8080/users/user/" + email,);
                const data = await response.data;
                console.log(data)
                setUser(data);
            }
            catch (err){
                console.log(err.response.data.errors)
            }

        }
        result();
    }, []);


    return (
        <div className="flex">
            <div className="relative">
                <img className="w-[1000px] h-[800px] ml-[60px] mt-[35px]" src={require('./profile .jpg')} />
                <div className ="absolute top-[300px] left-[250px] text-amber-700 text-[50px] flex flex-col justify-center items-center">
                </div>

            </div>
            <div>
                <h1>{user['name']}</h1>
                <p>{user['email']}</p>
                <p>{user['roles'][0]['name']}</p>
                {user['favourites'] ?.map(fav =>{
                    console.log(fav)
                })}
            </div>

        </div>
    )
}

export default UserProfile