import {useEffect, useState} from "react";
import axios from "axios";
import {Link,useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {Car} from "./Model"

interface Manufacturer {
    id: number;
    name: string;
    description: string;
    cars: Car[];

}
const Manufacturer = (props) =>{
    const [data, setData] = useState<Manufacturer | []>([]);
    const{brand} = useParams();
    // const [loading,setLoading] = useState(true);

    useEffect(() => {
        const result = async () => {
            const response = await axios.get<Manufacturer>('http://localhost:8080/'+ brand,);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    return (
        <div>



                <img className ="h-[750px] p-[30px]" src={require("./audi.jpg")}/>
                {/*// Keep getting error type x doesnt have type z*/}
            <div className="absolute top-[250px] right-0 w-[900px]">
                <h1 className="right-[400px] top-[200px] text-[70px]">{(data as any).name}</h1>
                <h2 className="break-all text-[30px] text-zinc-700 mt-6 ">{data["description"]}</h2>
            </div>

            <div className="grid grid-cols-3 mt-[10px]  items-center">
                {data["cars"]?.map(car =>
                    (
                        <Link key={car["id"]} to={`/brands/${data["name"]}/${car["name"]}`}>


                            <h1 className="text-[40px]">
                                {car.name}
                                <FontAwesomeIcon className="ml-[8px] text-red-700" icon={faAngleDoubleRight}/>
                            </h1>
                            <h1 className="bold text-[30px]">Starting from {car.price.toLocaleString("de-DE",{maximumFractionDigits:2})},- EUR</h1>
                            <img className="w-[400px] ml-[130px]" src={require("./img.png")}/>
                        </Link>
                    ))}
            </div>
        </div>
    )


}

export default Manufacturer;