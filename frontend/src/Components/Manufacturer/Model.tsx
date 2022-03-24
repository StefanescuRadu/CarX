import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {USER_TYPE,USER_NAME} from "../../Store"
import {useAtom} from "jotai";

import ImageSlider from "../ImageSlider/ImageSlider"
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {SliderData} from "../ImageSlider/SliderData";

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
    const [userType,setUserType] = useAtom(USER_TYPE);
    const [userName,setUserName] = useAtom(USER_NAME);
    const navigate = useNavigate();
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

    const headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const addToFavourite = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(brand))
        try{
            const response = await axios.post('http://localhost:8080/users/' + userName + '/' + data['id'],
                {
                    headers : headers
                }
            );
            console.log(response.data);
            navigate("/users/" + userName);
        }
        catch (err){
            console.log(err.response.data.errors)
        }
    }

    return(
        <div>
        <div className="relative top-[100px] flex flex-row justify-around">

        {/*<img className ="h-[650px] p-[30px]" src={require("./audi.jpg")}/>*/}
            <video className="ml-[30px]" width="1000" height="600" loop muted autoPlay controls={false}>
                <source className="width-[500px]" src="https://www.audi.ro/media/TeaserVideo_Video_Component/74442-779542-video/video/740fcd89/1627886179/video.mp4" type="video/mp4"/>
            </video>


    <div className="pt-[70px] text-[30px]">
            <h1>{data["name"]}</h1>
            <h2>{data["carType"]}</h2>
            <h2>{data["description"]}</h2>
            <h2>Engine: {data["engine"]}</h2>
            <h2>Number of seats:{data["seats"]}</h2>
            <h2>Length of the car:{data["length"]}</h2>
            <h2>Engine type:{data["engineType"]}</h2>
            <h2>Color: {data["color"]}</h2>
            <h2>Price:{data["price"]} euro</h2>
            {
                userType == "ROLE_USER" &&
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold
                                       py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={addToFavourite}>Add car to favourite</button>
            }
        </div>
        </div>
            <div className="relative top-[220px] pb-[200px]">
                <h1 className="text-[50px]">{data["name"]} in numbers</h1>
                <div className=" relative top-[100px]  w-[1500px] h-[400px]  text-[40px] m-auto  ">
                    <div className="text-center flex flex-row gap-x-[20px]  m-auto justify-between">
                    <div >
                        <p>Power</p>
                        <p className="text-[60px]">420 <span className="text-[25px]">kw(571CP)</span></p>
                    </div>
                    <div className=" px-[40px] border-x-[10px] border-zinc-900">
                        <p>Acceleration (0–100 km / h)</p>
                        <p className="text-[60px]">3,8 <span className="text-[25px]">seconds</span></p>
                    </div>
                    <div>
                        <p>Maximum torque</p>
                        <p className="text-[60px]">800 <span className="text-[25px]">nm</span></p>
                    </div>
                    </div>
                </div>
            </div>

            <h1 className="relative text-[40px]  mb-[50px]">Exterior</h1>
            <ImageSlider slides={SliderData}/>

            <h2 className="relative text-[40px] my-[50px]">Interior</h2>
            <ImageSlider slides={SliderData}/>

            <div className="relative top-[30px] text-[30px] m-auto w-[1400px] ">
                <h1>
                    Dimensions
                </h1>
                <div className="flex flex-row justify-evenly">
                <p>Being a versatile car and suitable as a family car, the Audi Q4 Sportback
                    e-tron offers a large number of storage compartments, which, including the
                    glove box, has a total capacity of 24.8 liters. Luggage with a total volume
                    of 520 liters takes place in the trunk of the Audi Q4 Sportback e-tron. With
                    the seat back folded, the volume increases to 1,490 liters.</p>
                <iframe className="width-[1000px]" width="2000"  src="https://www.youtube.com/embed/3ObHUazIfZQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}


export default Model
