import { useState, useEffect } from 'react';
import axios from 'axios';

export  const Main = () => {

    const [data, setData] = useState({hits: []})

    useEffect(() => {
        const result = async () => {
            const response = await axios('http://localhost:8080',);
            // const data = await response.json();
            setData(response.data);
            console.log(response.data)
        }
        result();
    }, []);

    return (<div>

    </div>)

}