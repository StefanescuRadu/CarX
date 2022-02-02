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

            <div className=" font-audio absolute left-10 top-[100px] w-[600px]">
                <h1 className="text-[90px] font-bold text-zinc-900">
                    CarX
                </h1>
                <p className="break-all text-[30px] text-zinc-700 ">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                </p>
            </div>

        </div>
    )
}

export default Landing