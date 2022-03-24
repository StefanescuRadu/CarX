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
    const [result,setResult] = useState<Manufacturer | []>([]);
    const [clickedButton, setClickedButton] = useState('');

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.value);
    };

    useEffect(() => {
        const result = async () => {
            const response = await axios.get<Manufacturer>('http://localhost:8080/'+ brand,);
            // const data = await response.json();
            setData(response.data);
            setResult(response.data);
            console.log(response.data)
        }
        result();
    }, []);

    useEffect(() => {
        if(clickedButton){
            filterCars(clickedButton)
        }

    }, [clickedButton]);
    const showAll = () => {
        setData(result);
    }
    const filterCars = (element:string) => {

        if(data){
            const filteredCars = result["cars"].filter(car => car["carType"] == element)
            const filtered = {
                id: null,
                name: null,
                description: null,
                cars: []
            }

            filtered["id"] = result["id"];
            filtered["name"] = result["name"];
            filtered["description"] = result["description"];
            filtered["cars"] = filteredCars;
            console.log(result)
            console.log(filtered)
            setData(filtered)
        }


    }

    return (
        <div>

                <img className ="h-[750px] p-[30px]" src={require("./audi.jpg")}/>
            <div className="flex w-[900px] m-auto justify-between">
                <button className="bg-white text-[30px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value="HATCHBACK" onClick={showAll}>ALL</button>
                <button className="bg-white text-[30px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value="HATCHBACK" onClick={buttonHandler}>HATCHBACK</button>
                <button className="bg-white text-[30px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value="SEDAN" onClick={buttonHandler}>SEDAN</button>
                <button className="bg-white text-[30px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value ="COUPE" onClick={buttonHandler}>COUPE</button>
                <button className="bg-white text-[30px] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" value ="SUV" onClick={buttonHandler}>SUV</button>
            </div>

                {/*// Keep getting error type x doesnt have type z*/}
                <div className="absolute top-[250px] right-0 w-[900px]">
                    <div className="flex flex-row justify-between w-[350px] m-auto">
                        <h1 className="right-[400px] top-[200px] text-[70px]">{(data as any).name}</h1>
                        <img className ="object-fill h-[100px]" src={require("./porscheLogo.png")}/>
                    </div>
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
