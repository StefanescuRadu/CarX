import axios from "axios";
import {useAtom} from "jotai";
import {USER_EMAIL, USER_TYPE} from "../../Store"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ReactSession} from 'react-client-session';
import {faBook, faCoins, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import Profile from "../../assets/profile .jpg";

const UserProfile = () => {

    const [email, setEmail] = useAtom(USER_EMAIL);
    const [userType, setUserType] = useAtom(USER_TYPE);
    const [user, setUser] = useState([]);
    let token = ReactSession.get("token");

    useEffect(() => {
        const result = async () => {
            console.log(email)
            try {
                const response = await axios.get("http://localhost:8080/users/user/" + email,);
                const data = await response.data;
                console.log(data)
                setUser(data);
            } catch (err) {
                console.log(err.response.data.errors)
            }

        }
        result();
    }, []);


    return (
        <div className="flex">
            <div className="relative">
                <img className="w-[1000px] h-[800px] ml-[60px] mt-[35px]" src={Profile}/>
                <div
                    className="absolute top-[300px] left-[250px] text-amber-700 text-[50px] flex flex-col justify-center items-center">
                </div>

            </div>
            <div className=" break-all relative top-[35px] ml-[30px] bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4
                            text-[30px] w-[950px] flex flex-col justify-center items-center">
                <FontAwesomeIcon className="text-[45px] hover:text-blue-500" icon={faUser}/>
                <span> {user['name']}</span>
                <FontAwesomeIcon className="text-[45px] hover:text-yellow-500" icon={faEnvelope}/>
                <p> {user['email']}</p>
                <FontAwesomeIcon className="text-[45px] hover:text-orange-500" icon={faCoins}/><p>{token}</p>
                {(userType == "ROLE_USER" &&

                    user['favourites']) &&
                <div>
                    <FontAwesomeIcon className="text-[45px] hover:text-green-500" icon={faBook}/>
                    <h1>Favourites</h1>
                </div>
                }
                {userType == "ROLE_ADMIN" &&
                <>
                    <Link
                        className="btn-blue"
                        to="/addBrand">
                        Add new brands
                    </Link>
                    <Link
                        className="btn-blue"
                        to="/addCar">
                        Add new cars
                    </Link>
                </>
                }

                {user['favourites']?.map(fav => (
                    <div>
                        <h1>{fav['name']}</h1>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default UserProfile
