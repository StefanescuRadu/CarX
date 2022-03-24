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

            <div className="relative top-[30px]   text-[30px] mt-[50px] m-auto w-[1400px] h-[600px]">
                <h1 className="text-[60px] pb-[60px]">
                    Dimensions
                </h1>
                <div className="flex flex-row ">
                <p>Being a versatile car and suitable as a family car, the Audi Q4 Sportback
                    e-tron offers a large number of storage compartments, which, including the
                    glove box, has a total capacity of 24.8 liters. Luggage with a total volume
                    of 520 liters takes place in the trunk of the Audi Q4 Sportback e-tron. With
                    the seat back folded, the volume increases to 1,490 liters.</p>
                    <div className="width-[400px] ">
                        <iframe width="600" height="405"
                                src="https://www.youtube.com/embed/3ObHUazIfZQ">
                        </iframe>
                    </div>

                </div>
            </div>

            <div className="flex flex-row justify-evenly w-[100%]  mt-[40px]">
                <div>
                    <img className="w-[600px] ml-[130px]" src="https://cdn.audi.ro/media/FullWidthImage_Component/74442-779544-482852-779545/dh-425-33d43f/af089c47/1627886179/1920x1080-audi-a3-limousine-business-package.jpg"/>
                    <h1>Bussiness package</h1>
                <p>With the optional Business package you are always optimally informed. The package offers you attractive price advantages for the facilities listed below.</p>
                <ul>
                    <li>MMI Navigation plus with MMI touch</li>
                    <li>Audi smartphone interface must also be included</li>
                    <li>Audi phone box light</li>
                    <li>LED headlights and LED rear light blocks and dynamic rear signal lights</li>
                    <li>Audi virtual cockpit</li>
                    <li>Multifunction Plus 3-spoke steering wheel (S tronic with paddle shift paddles)</li>
                </ul>
                </div>
                <div>
                        <img className="w-[600px] ml-[130px]" src="https://cdn.audi.ro/media/FullWidthImage_Component/74442-779544-482853-779548/dh-425-33d43f/57668bcf/1627886180/1920x1080-audi-a3-limousine-audi-exclusivepaket.jpg"/>
                <h1>Audi exclusive</h1>
                <p>Those who drive an Audi want something really special.</p>
                <p>Audi Exclusive gives you the opportunity to turn your new Audi into your own personal car, that is, a truly special car. Here you can see how well Audi exclusively adapts to your personal requirements: from mats to full individualization</p>
                <button>Find out more</button>
                </div>
            </div>

        </div>
    )
}


export default Model
