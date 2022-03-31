export const loadMapApi = () => {

    const mapsURL =`https://maps.googleapis.com/maps/api/js?key=AIzaSyCJuVspl0cOtvfAmCq0-AOhr9xfIuik6uQ&libraries=places`;
    const script = document.getElementsByTagName('script');

    for(let i=0; i<script.length; i++){
        if(script[i].src.indexOf(mapsURL) === 0){
            return script[i];
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};
