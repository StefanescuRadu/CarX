import {useEffect, useRef, useState} from 'react';

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

let service: google.maps.places.PlacesService;
let infoWindow: google.maps.InfoWindow;

const Map: React.FC<IMap> = ({mapType,mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map,setMap] = useState<GoogleMap>();


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
        const defaultAddress = new google.maps.LatLng( 44.439,26.096);
        initMap(12,defaultAddress);


    }

    const searchDealers = (): void => {
        service = new google.maps.places.PlacesService(map);

        var request = {
            location: new google.maps.LatLng( 44.439,26.096),
            radius: 900,
            type: 'car_dealer'
        };

        service = new google.maps.places.PlacesService(map);
        console.log(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
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
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
            "sandstone rock formation in the southern part of the " +
            "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
            "south west of the nearest large town, Alice Springs; 450&#160;km " +
            "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
            "features of the Uluru - Kata Tjuta National Park. Uluru is " +
            "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
            "Aboriginal people of the area. It has many springs, waterholes, " +
            "rock caves and ancient paintings. Uluru is listed as a World " +
            "Heritage Site.</p>" +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
            "(last visited June 22, 2009).</p>" +
            "</div>" +
            "</div>";

        infoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
    }

    return(

        <div className="flex justify-center">
            <div ref={ref} className="w-[1500px] h-[1000px]"></div>
        </div>
    )
};

export default Map;
