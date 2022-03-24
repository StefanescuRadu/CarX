import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface Car{

     name: string,
     carType: string,
    description: string,
    engine: number,
    seats: number,
    length: number,
    engineType: string,
    price: number,
    color: string;
    interior:string[];
    exterior:string[];
}

const AddCar = () => {
    const navigate = useNavigate();
    const [car,setCar] = useState<Car>({
        name: null,
        carType: "SEDAN",
        description: null,
        engine: null,
        seats: null,
        length: null,
        engineType: "DIESEL",
        price: null,
        color: "Black",
        interior:[],
        exterior:[]
    })
    const[data,setData] = useState(null);
    const [brand,setBrand] = useState("BMW");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPost();

    };

    const headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const fetchPost = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(car))
        try{
            const response = await axios.post('http://localhost:8080/' + brand,
                JSON.stringify(car),
                {
                    headers : headers
                }
            );
            console.log(response.data);
            navigate("/brands/" + brand)
        }
        catch (err){
            console.log(err.response.data.errors)
        }
    }

    useEffect(() => {
        const result = async () => {
            const response = await axios('http://localhost:8080',);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);

    const onChange = () => {

    }

    return (
        <div className="flex flex-row justify-center align-center">

            <form className="relative top-[10px] ml-[30px] bg-white shadow-md rounded px-2 pt-2 pb-8 mb-4 text-[15px] w-[970px] flex flex-col justify-center items-center"
                  onSubmit = {handleSubmit} >
                <div>
                    <label className="block mt-[12px]" htmlFor="name" >Model</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="name" name="name" placeholder="Name"   required onChange={(e) =>setCar({...car,name:e.target.value})} />
                </div>
                <div>
                    <label className="block mt-[3px]" htmlFor="description" >Description</label>
                    <textarea className=" mt-[12px]  resize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="description" name="description" placeholder="Description" required onChange={(e) =>setCar({...car,description:e.target.value})}/>

                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="carType" >CarType</label>
                    <select  className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="carType" name="carType" placeholder="CarType"   required onChange={(e) =>setCar({...car,carType:e.target.value})} >
                        <option value="SEDAN">Sedan</option>
                        <option value="SUV">Suv</option>
                        <option value="COUPE">Coupe</option>
                        <option value="HATCHBACK">Hatchback</option>
                    </select>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="engineType" >EngineType</label>
                    <select  className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="engineType" name="engineType" placeholder="EngineType"   required onChange={(e) =>setCar({...car,engineType:e.target.value})} >
                        <option value="DIESEL">Diesel</option>
                        <option value="GAS">Gas</option>
                        <option value="ELECTRIC">Electric</option>
                        <option value="HYBRID">Hybrid</option>
                    </select>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="engine" >Engine</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="number" id="engine" name="engine" placeholder="Engine"   required onChange={(e) =>setCar({...car,engine:parseInt(e.target.value)})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="seats" >Seats</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="number" id="seats" name="seats" placeholder="Seats"   required onChange={(e) =>setCar({...car,seats:parseInt(e.target.value)})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="length" >Length</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="number" id="length" name="length" placeholder="Length"   required onChange={(e) =>setCar({...car,length:parseInt(e.target.value)})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="price" >Price</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="number" id="price" name="price" placeholder="Price"   required onChange={(e) =>setCar({...car,price:parseInt(e.target.value)})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="color" >Color</label>
                    <select  className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="color" name="color" placeholder="Color"   required onChange={(e) =>setCar({...car,color:e.target.value})}>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Gray">Gray</option>
                        <option value="Saphire Black" >Saphire Black</option>
                    </select>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="brand" >Brand </label>
                    {data
                    &&
                    <select
                            className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="brand" name="brand" placeholder="Brand" required
                            onChange={(e) => setBrand(e.target.value)}>
                        {data.map(brand => (
                            <option key={brand.id} value={brand.name}>{brand.name}</option>
                        ))}
                    </select>
                    }
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior1" >Interior picture 1</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="interiour1" name="interior1" placeholder="interior1"   required onChange={(e) =>setCar({...car,interior:[...car.interior,e.target.value]})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior2" >Interior picture 2</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="interior2" name="interior2" placeholder="interior2"   required onChange={(e) =>setCar({...car,interior:[...car.interior,e.target.value]})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior3" >Interior picture 3</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="interiour3" name="interior3" placeholder="interior3"   required onChange={(e) =>setCar({...car,interior:[...car.interior,e.target.value]})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior1" >Exterior picture 1</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="exterior1" name="exterior1" placeholder="interior1"   required onChange={(e) =>setCar({...car,exterior:[...car.interior,e.target.value]})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior2" >Exterior picture 2</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="exterior2" name="exterior2" placeholder="exterior2"   required onChange={(e) =>setCar({...car,exterior:[...car.interior,e.target.value]})} />
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior3" >Exterior picture 3</label>
                    <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" id="exterior3" name="exterior3" placeholder="exterior3"   required onChange={(e) =>setCar({...car,exterior:[...car.interior,e.target.value]})} />
                </div>

                <button className="bg-stone-900 mt-[30px] hover:bg-stone-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">Add car to brand</button>
            </form>
        </div>

    )
}

export default AddCar
