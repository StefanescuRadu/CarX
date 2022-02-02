import { useState, useEffect } from 'react';
import axios from 'axios';
import Brand from "./Brand";
export  const Brands = () => {

    const [data, setData] = useState([]);
    // const [loading,setLoading] = useState(true);

    useEffect(() => {
        const result = async () => {
            const response = await axios('http://localhost:8080',);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    return (

        <div className="grid grid-cols-2 mt-[10px]  items-center">
            {data.map(data => (

                <div key={data.id} className="group relative m-[3px]  h-[400px]  h-fill font-nav flex flex-col justify-center items-center">
                    <img className=" object-stretch w-[1100px] overflow-hidden group-hover:opacity-60 opacity-10" src={require("./car2.jpg")} />
                    <h1 className="absolute top-10 text-[40px] group-hover:opacity-100 opacity-0">{data.name}</h1>
                    <h2 className="absolute top-40 text-[20px] group-hover:opacity-100 opacity-0">{data.description}</h2>
                    <div className="absolute">
                    <img className=" object-fill h-[100px] group-hover:opacity-0" src={require("./porscheLogo.png")} />
                    </div>
                </div>
            ))}
    </div>
    )

}