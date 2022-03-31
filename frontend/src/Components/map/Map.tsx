import {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;


const Map: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();
    const {brand} = useParams();
    const carDealers = [];
    const cars = document.getElementById('cars');
    let service: google.maps.places.PlacesService;

    const startMap = (): void => {
        if (!map) {
            defaultMapStart();
        }
        if (map) {
            searchDealers();
        }
    };

    useEffect(startMap, [map]);

    const defaultMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(44.439663, 26.096306);
        initMap(12, defaultAddress);
    }

    const searchDealers = (): void => {
        service = new google.maps.places.PlacesService(map);

        let request = {
            location: new google.maps.LatLng(44.439663, 26.096306),
            radius: 2000,
            query: brand + 'Dealer',
            // type: 'car_dealer',
            fields: ['name', 'opening_hours']
        };

        service = new google.maps.places.PlacesService(map);
        console.log(map);
        service.textSearch(request, callback);
    }

    const callback = (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i]);
                carDealers.push(results[i]);
            }
        }
        // renderCarDealers();
        console.log(carDealers);
        console.log(results.length);
    };

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
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

    const createMarker = (place: google.maps.places.PlaceResult) => {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP
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

    // const renderCarDealers = () => {
    //     for(let i = 0; i<carDealers.length; i++){
    //             let div = document.createElement('div');
    //             let name = document.createElement('h1');
    //             let vicinity = document.createElement('h2');
    //             let rating = document.createElement('h2');
    //             let user_ratings = document.createElement('h2');
    //
    //             name.innerText = carDealers[i].name;
    //             vicinity.innerText = carDealers[i].vicinity;
    //             rating.innerText = carDealers[i].rating;
    //             user_ratings.innerText = carDealers[i].user_ratings_total;
    //
    //             div.append(name,vicinity,rating,user_ratings);
    //             cars.appendChild(div);
    //
    //     }
    // }

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const request = {
        origin: 'Bucharest',
        destination: 'Ploiesti',
        // travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });


    return (

        <div className="flex justify-center">
            <div ref={ref} className=" absolute left-0 w-[1650px] h-[875px]"/>
            <div className="absolute right-[25px] top-[75px] text-[40px]" id="cars">
                Directions
                <h1>To be implemented</h1>
            </div>
        </div>
    )
};

export default Map;
