
interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({mapType,mapTypeControl = false}) => {

return(
    <div>
        this is map component
    </div>
)
};

export default Map;
