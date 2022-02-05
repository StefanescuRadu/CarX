import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";



interface Car{
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
            const response = await axios.get<Car>('http://localhost:8080/' + brand + model,);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    return(
        <h1>Hello,test</h1>
    )
}


export default Model