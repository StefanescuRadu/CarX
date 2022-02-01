import { useState, useEffect } from 'react';
import axios from 'axios';

export  const Main = () => {

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

        <div>
            {data.map(data => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                </div>
            ))}
    </div>
    )

}