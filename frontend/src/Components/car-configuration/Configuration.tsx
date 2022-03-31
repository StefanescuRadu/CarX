import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Car} from "../manufacturer/Model";
import ImageSlider from "../image-slider/ImageSlider"

const Configuration = () => {
    const [data, setData] = useState<Car | []>([]);
    const {brand, model} = useParams();
    const [select,setSelect] = useState('Basic');

    useEffect(() => {
        const result = async () => {
            const response = await axios.get<Car>('http://localhost:8080/' + brand + "/" + model,);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    useEffect(()=>{
        changePrice()
    },[select])

    const changePrice = () => {
        if(select == "Performance"){
            data["price"] = 2300;
            data["color"] = 'grey';
            data["length"] = 120;

        }
    }
    return(
        <div>
            <div className=" relative top-[100px]">
                {data["exterior"] && <ImageSlider slides={data["exterior"]}/>}
            </div>
            <div className="pt-[70px] text-[30px]">
                <h1>{data["name"]}</h1>
                <h2>{data["carType"]}</h2>
                <h2>{data["description"]}</h2>
                <h2>Engine: {data["engine"]}</h2>
                <h2>Number of seats: {data["seats"]}</h2>
                <h2>Length of the car: {data["length"]}</h2>
                <h2>Engine type:{data["engineType"]}</h2>
                <h2>Color: {data["color"]}</h2>
                <h2>Price: {data["price"]} euro</h2>
            </div>
            <select
                value={select}
                onChange={event => setSelect(event.target.value)}>
                <option> Basic</option>
                <option> Performance </option>
            </select>
            <h1>{select}</h1>
        </div>

    )
}

export default Configuration;
