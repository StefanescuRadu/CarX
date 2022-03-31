import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface Car {

    name: string,
    description: string,
    engine: number,
    seats: number,
    length: number,
    price: number,
    interior: string[];
    exterior: string[];
    carImage: string;
}

const EditCar = () => {
    const navigate = useNavigate();
    const [car, setCar] = useState<Car>({
        name: null,
        description: null,
        engine: null,
        seats: null,
        length: null,
        price: null,
        interior: [],
        exterior: [],
        carImage: null,

    })
    const [data, setData] = useState(null);
    const {brand, model} = useParams();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchPost();

    };

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const fetchPost = async () => {
        console.log("tried to fetch");
        console.log(JSON.stringify(car))
        try {
            // const response = await axios.post('http://localhost:8080/' + brand,
            //     JSON.stringify(car),
            //     {
            //         headers : headers
            //     }
            // );
            // console.log(response.data);
            // navigate("/brands/" + brand + "/" + model)
        } catch (err) {
            console.log(err.response.data.errors)
        }
    }

    useEffect(() => {
        const result = async () => {
            const response = await axios('http://localhost:8080/' + brand + '/' + model,);
            // const data = await response.json();
            setData(response.data);

            console.log(response.data)
        }
        result();
    }, []);


    return (
        <div className="flex flex-row justify-center align-center">
            <form
                className="relative top-[10px] ml-[30px] bg-white shadow-md rounded px-2 pt-2 pb-8 mb-4 text-[15px] w-[970px] flex flex-col justify-center items-center"
                onSubmit={handleSubmit}>
                <div>
                    <label className="block mt-[12px]" htmlFor="name">Model</label>
                    <input value={data["name"]} className="input-form" type="text" id="name" name="name"
                           placeholder="Name" required onChange={(e) => setCar({...car, name: e.target.value})}/>
                </div>
                <div>
                    <label className="block mt-[3px]" htmlFor="description">Description</label>
                    <textarea value={data["description"]} className="input-form" id="description" name="description"
                              placeholder="Description" required
                              onChange={(e) => setCar({...car, description: e.target.value})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="engine">Engine</label>
                    <input value={data["engine"]} className="input-form" type="number" id="engine" name="engine"
                           placeholder="Engine" required
                           onChange={(e) => setCar({...car, engine: parseInt(e.target.value)})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="seats">Seats</label>
                    <input value={data["seats"]} className="input-form" type="number" id="seats" name="seats"
                           placeholder="Seats" required
                           onChange={(e) => setCar({...car, seats: parseInt(e.target.value)})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="length">Length</label>
                    <input value={data["length"]} className="input-form" type="number" id="length" name="length"
                           placeholder="Length" required
                           onChange={(e) => setCar({...car, length: parseInt(e.target.value)})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="price">Price</label>
                    <input value={data["price"]} className="input-form" type="number" id="price" name="price"
                           placeholder="Price" required
                           onChange={(e) => setCar({...car, price: parseInt(e.target.value)})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior1">Interior picture 1</label>
                    <input value={data["interior"][0]} className="input-form" type="text" id="interiour1"
                           name="interior1" placeholder="interior1" required
                           onChange={(e) => setCar({...car, interior: [...car.interior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior2">Interior picture 2</label>
                    <input value={data["interior"][1]} className="input-form" type="text" id="interior2"
                           name="interior2" placeholder="interior2" required
                           onChange={(e) => setCar({...car, interior: [...car.interior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="interior3">Interior picture 3</label>
                    <input value={data["interior"][2]} className="input-form" type="text" id="interiour3"
                           name="interior3" placeholder="interior3" required
                           onChange={(e) => setCar({...car, interior: [...car.interior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior1">Exterior picture 1</label>
                    <input value={data["exterior"][0]} className="input-form" type="text" id="exterior1"
                           name="exterior1" placeholder="interior1" required
                           onChange={(e) => setCar({...car, exterior: [...car.exterior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior2">Exterior picture 2</label>
                    <input value={data["exterior"][1]} className="input-form" type="text" id="exterior2"
                           name="exterior2" placeholder="exterior2" required
                           onChange={(e) => setCar({...car, exterior: [...car.exterior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="exterior3">Exterior picture 3</label>
                    <input value={data["exterior"][2]} className="input-form" type="text" id="exterior3"
                           name="exterior3" placeholder="exterior3" required
                           onChange={(e) => setCar({...car, exterior: [...car.exterior, e.target.value]})}/>
                </div>
                <div>
                    <label className="block mt-[12px]" htmlFor="backgroundImage">Background image</label>
                    <input value={data["carImage"]} className="input-form" type="text" id="backgroundImage"
                           name="backgroundImage" placeholder="backgroundImage" required
                           onChange={(e) => setCar({...car, carImage: e.target.value})}/>
                </div>
                <button
                    className="bg-stone-900 mt-[30px] hover:bg-stone-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Edit car
                </button>
            </form>
        </div>

    )
}

export default EditCar
