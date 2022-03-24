import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {USER_TYPE,USER_NAME} from "../../Store"
import {useAtom} from "jotai";

import ImageSlider from "../ImageSlider/ImageSlider"
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {SliderData} from "../ImageSlider/SliderData";
import ModelFooter from "./ModelFooter.jsx";

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

            <h1 className="relative text-[40px]  mb-[20px]">Interior</h1>
            <p className="relative text-[20px] w-[1000px] m-auto mb-[50px]">The interior of the Audi A3 Limousine is mainly characterized by driver orientation and digitization. With the optional Ambient Plus lighting package, you can bathe the interior in 30 different colors. The new dashboard, center console with shifter selector for S tronic models and optional sports front seats all create a progressive look. The standard 10.1-inch MMI touch color display is integrated into a sleek, glossy black surface.</p>
            <ImageSlider slides={SliderData}/>

            <h2 className="relative text-[40px] mt-[50px] mb-[20px]">Exterior</h2>
            <p className="relative text-[20px] w-[1000px] m-auto mb-[50px]">The new design of the Audi S5 Coupé TDI¹ signals sportiness and attracts the eye from all perspectives. This spectacular impression is underlined by the S elements included in the standard exterior equipment: S-bar, radiator grille with honeycomb pattern and matte black Titan finish and silver-aluminum matte inserts, wide air intakes and silver-aluminum matte blade. The 18-inch rims and the S sports chassis, the exterior mirrors with matt silver-aluminum housings and the S emblem on the illuminated front sills stand out from the profile. The S-trim is also decorated in silver-matte aluminum, the double chrome S-ends on the exhaust system and the A-wing dynamically accentuate the wide rear of the Audi S5 Coupé TDI¹.</p>
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


            <h1 className="text-[50px] relative top-[25px]">Packages </h1>
            <div className="flex flex-row justify-center mt-[80px] w-[1800px] m-auto text-[50px]  ">
                <div className="w-[900px] ">
                    <img className="w-[600px] relative left-[150px] " src="https://cdn.audi.ro/media/FullWidthImage_Component/74442-779544-482852-779545/dh-425-33d43f/af089c47/1627886179/1920x1080-audi-a3-limousine-business-package.jpg"/>
                    <h1 className="text-zinc-900">Bussiness package</h1>
                <p className="text-[30px]">With the optional Business package you are always optimally informed. The package offers you attractive price advantages for the facilities listed below.</p>
                <ul className="text-[20px] ">
                    <li>MMI Navigation plus with MMI touch</li>
                    <li>Audi smartphone interface must also be included</li>
                    <li>Audi phone box light</li>
                    <li>LED headlights and LED rear light blocks and dynamic rear signal lights</li>
                    <li>Audi virtual cockpit</li>
                    <li>Multifunction Plus 3-spoke steering wheel (S tronic with paddle shift paddles)</li>
                </ul>
                </div>

                <div  className="w-[900px]" >
                        <img className="w-[600px] relative left-[150px] " src="https://cdn.audi.ro/media/FullWidthImage_Component/74442-779544-482853-779548/dh-425-33d43f/57668bcf/1627886180/1920x1080-audi-a3-limousine-audi-exclusivepaket.jpg"/>
                <h1>Audi exclusive</h1>
                <p className="text-[30px]">Those who drive an Audi want something really special.</p>
                <p className="text-[30px]">Audi Exclusive gives you the opportunity to turn your new Audi into your own personal car, that is, a truly special car. Here you can see how well Audi exclusively adapts to your personal requirements: from mats to full individualization</p>
                <button className=" text-[35px] bg-zinc-900 hover:bg-slate-100 text-white  font-semibold hover:text-zinc-800 py-1 px-2 border border-zinc-500 hover:border-transparent rounded">Find out more</button>
                </div>
            </div>

            <div className="relative top-[200px] text-[50px]">
                <h1>{data["name"]} drive select</h1>
                <p className="text-[30px] mb-[150px]">You can drive efficiently, comfortably, dynamically, automatically or according to your custom settings: with the Audi drive select, you can always adapt your Audi A3 to your personal driving style. You choose if and when you want to benefit from more dynamism or more comfort, or simply the ideal combination for you. You can also use the Efficiency mode to save fuel and protect the environment.</p>
                <img className="w-[1800px] m-auto" src="https://cdn.audi.ro/media/FullWidthImage_Component/74442-779556/dh-1380-33d43f/5fef4d32/1627886180/1920x1920-audi-a3-sedan-my2021-1022-oe.jpg" />
            </div>

            <div className="flex flex-row justify-evenly  relative top-[303px] h-[230px] bg-zinc-200 w-[100%]">
                <div className="flex flex-col text-[20px] relative top-[25px]">
                    <h1  className="text-[35px]">Models</h1>
                    <a href="#">All models</a>
                    <a href="#">Vehicles with immediate delivery</a>
                    <a href="#">{brand} special offers</a>
                </div>
                <div className="flex flex-col text-[20px] relative top-[25px]">
                    <h1 className="text-[35px]">For clients</h1>
                    <a href="#">DasWelt Auto</a>
                    <a href="#">Service & Accesories</a>
                    <a href="#">Insurance</a>
                    <a href="#">Funding</a>
                </div>
                <div className="flex flex-col text-[20px] relative top-[25px]">
                    <h1 className="text-[35px]">Inovation</h1>
                    <a href="#">{brand} sport</a>
                    <a href="#">{brand} e-tron</a>
                </div>
                <div className="flex flex-col text-[20px] relative top-[25px]">
                    <h1 className="text-[35px] text-zinc-900">{brand} Romania</h1>
                    <a href="#">History</a>
                    <a href="#">Production locations</a>
                    <a href="#">Research partnerships</a>
                </div>

            </div>
        </div>
    )
}


export default Model
