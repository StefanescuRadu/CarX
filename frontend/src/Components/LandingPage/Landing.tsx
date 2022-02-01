const Landing = () =>{
    return(
        <div className="bg-neutral-50 h-[800px] relative">
            <div className=" absolute right-0 top-20">
                <img className="object-fill h-[600px] w-[1100px] " alt="mustang" src={require("./Tesla.jpg")}/>
            </div>
        <div className=" absolute left-[700px] top-[150px] ">
            <img className="object-fill w-[400px]" alt="car" src={require("./Lambo.jpg")}/>
        </div>
            <div className=" absolute  top-[550px] right-[500px] z-10">
                <img className="object-fill w-[400px] " alt="highroad" src={require("./Porsche.jpg")}/>
            </div>

            <h1 className="text-[90px] font-bold ">
                Hello world!
            </h1>
        </div>
    )
}

export default Landing