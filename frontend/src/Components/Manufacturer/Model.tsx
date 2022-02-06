import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

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
        </div>

    )
}


export default Model