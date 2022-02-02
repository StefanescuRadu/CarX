import { useState, useEffect } from 'react';
import axios from 'axios';

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

        <div className="grid grid-cols-2 gap-4 h-[800px] items-center">
            {data.map(data => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                </div>
            ))}
    </div>
    )

}