
interface iBrand {
    id: number,
    name: string,
    description:string;

}

const Brand = (props : iBrand) => {
    return(
        <div key={props.id}>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
           
        </div>
    )
}

export default Brand;