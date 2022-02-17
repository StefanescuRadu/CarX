import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Brand{
    name: string;
    description: string;
}
const AddBrand = () => {
    const navigate = useNavigate();
    const [brand,setBrand] = useState<Brand>({
        name: null,
        description: null,
    })

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
        console.log(JSON.stringify(brand))
        try{
            const response = await axios.post('http://localhost:8080/',
                JSON.stringify(brand),
                {
                    headers : headers
                }
            );
            console.log(response.data);
            navigate("/brands")
        }
        catch (err){
            console.log(err.response.data.errors)
        }
    }
    return (
        <div className="flex justify-center align-center">

        <form className="relative top-[200px] ml-[30px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-[30px] w-[970px] flex flex-col justify-center items-center"
              onSubmit = {handleSubmit} >
            <div>
                <label className="block mt-[12px]" htmlFor="brand" >Brand</label>
                <input className=" mt-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" id="brand" name="brand" placeholder="Brand"   required onChange={(e) =>setBrand({...brand,name:e.target.value})} />
            </div>
            <div>
                <label className="block mt-[12px]" htmlFor="description" >Description</label>
                <textarea className=" mt-[12px]  resize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" name="description" placeholder="Description" required onChange={(e) =>setBrand({...brand,description:e.target.value})}/>

            </div>
            <button className="bg-stone-900 mt-[30px] hover:bg-stone-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">Add brand</button>
        </form>
        </div>
    )
}

export default AddBrand