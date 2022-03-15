import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {USER_TYPE,USER_NAME} from "../../Store"
import {useAtom} from "jotai";

export interface Car{
    id: number;
    name: string;
    carType:string;
    description: string;
    engine: number;
    seats: number;
    length: number;
    engineType: string;
    price: number;
    color: string;
}

const Model = (props) => {
    const [data, setData] = useState<Car | []>([]);
    const {brand,model} = useParams();
    const [userType,setUserType] = useAtom(USER_TYPE);
    const [userName,setUserName] = useAtom(USER_NAME);
    const navigate = useNavigate();
    console.log(model,brand)

    useEffect(() => {
        const result = async () => {
            const response = await axios.get<Car>('http://localhost:8080/' + brand + "/" + model,);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    const headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const addToFavourite = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(brand))
        try{
            const response = await axios.post('http://localhost:8080/users/' + userName + '/' + data['id'],
                {
                    headers : headers
                }
            );
            console.log(response.data);
            navigate("/users/" + userName);
        }
        catch (err){
            console.log(err.response.data.errors)
        }
    }

    return(
        <div className="text-[30px]">
            <h1>{data["name"]}</h1>
            <h2>{data["carType"]}</h2>
            <h2>{data["description"]}</h2>
            <h2>Engine: {data["engine"]}</h2>
            <h2>Number of seats:{data["seats"]}</h2>
            <h2>Length of the car:{data["length"]}</h2>
            <h2>Engine type:{data["engineType"]}</h2>
            <h2>Color: {data["color"]}</h2>
            <h2>Current price:{data["price"]}</h2>
            {
                userType == "ROLE_USER" &&
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold
                                       py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={addToFavourite}>Add car to favourite</button>
            }
        </div>

    )
}


export default Model
