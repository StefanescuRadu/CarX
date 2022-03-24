import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarked} from "@fortawesome/free-solid-svg-icons";

export  const Brands = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const result = async () => {
            const response = await axios('http://localhost:8080',);
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);


    return (

        <div className="grid grid-cols-2 mt-[10px]  items-center">
        {data.map(data => (
            <Link key={data.id} to={`/brands/${data.name}`}>
                <div  className="group relative m-[3px]  h-[400px]  h-fill font-nav flex flex-col justify-center items-center">
                    <img className=" object-stretch w-[1100px] overflow-hidden group-hover:opacity-0" src={data.brandImage} />
                    <div className="flex flex-row justify-between absolute top-10 w-[300px]">
                        <h1 className=" text-[40px] group-hover:opacity-100 opacity-0">{data.name}</h1>
                        <img className=" object-fill h-[100px] group-hover:opacity-100 opacity-0" src={data.brandLogo} />
                    </div>
                    <h2 className="absolute top-40 text-[20px] group-hover:opacity-100 opacity-0">{data.description}</h2>
                    <div className="absolute bottom-[70px]">
                        <Link to={`/map/${data.name}`}>
                            <FontAwesomeIcon className="text-[30px] text-blue-300 group-hover:opacity-100 opacity-0" icon={faMapMarked} />
                            <h1 className="text-[30px] group-hover:opacity-100 opacity-0">Dealers near you</h1>
                        </Link>
                    </div>
                </div>
            </Link>
            ))}
    </div>

    )

}
