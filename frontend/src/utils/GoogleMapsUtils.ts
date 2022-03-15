export const loadMapApi = () => {

    const mapsURL =`https://maps.googleapis.com/maps/api/js?key=AIzaSyCJuVspl0cOtvfAmCq0-AOhr9xfIuik6uQ&libraries=places&language=en&v=quarterly`;
    const scripts = document.getElementsByTagName('script');

    for(let i=0; i<scripts.length; i++){
        if(scripts[i].src.indexOf(mapsURL) === 0){
            return scripts[i];
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};
