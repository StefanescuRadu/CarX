import {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

let service: google.maps.places.PlacesService;


const Map: React.FC<IMap> = ({mapType,mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map,setMap] = useState<GoogleMap>();
    const{brand} = useParams();

    const startMap = ():void => {
        if(!map) {
            defaultMapStart();
        }
        if(map){
            searchDealers();
        }
    };

    useEffect(startMap,[map]);

    const defaultMapStart = ():void => {
        const defaultAddress = new google.maps.LatLng( 48.210033,16.363449);
        initMap(12,defaultAddress);


    }

    const searchDealers = (): void => {
        service = new google.maps.places.PlacesService(map);

        let request = {
            location: new google.maps.LatLng( 48.210033,16.363449),
            radius: 2000,
            query: brand + 'Dealer',
            // type: 'car_dealer',
            fields: ['name', 'opening_hours']
        };

        service = new google.maps.places.PlacesService(map);
        console.log(map);
        service.textSearch(request, callback);
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i]);
            }
        }
        console.log(results.length);
    };

    const initMap = (zoomLevel:number,address:GoogleLatLng):void =>{
        if(ref.current) {
            setMap(
                new google.maps.Map(ref.current,{
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    streetViewControl: false,
                    zoomControl: true,
                    mapTypeId: mapType
                })
            );
        }

    };

    function createMarker(place: google.maps.places.PlaceResult) {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
            animation:google.maps.Animation.DROP
        });

        const contentString =
            `<h1>${place.name}</h1>` +
            `<h2>${place.vicinity}</h2>` +
            `<h2> Rating: ${place.rating}</h2>` +
            `<h2>Total user ratings: ${place.user_ratings_total}</h2>`;

        let infoWindow: google.maps.InfoWindow;

        infoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }

    return(

        <div className="flex justify-center">
            <div ref={ref} className=" absolute left-0 w-[1350px] h-[770px]"></div>
        </div>
    )
};

export default Map;
