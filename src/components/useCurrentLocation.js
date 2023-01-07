import { useEffect, useState } from "react"

export const useCurrentLocation = () => {
    const [ location, setLocation ] = useState({});
    //const [error, setError] = useState(null);
    const [watcherId, setWatcherID] = useState(null);

    function success(position) {
        setLocation({
            'latitude': position.coords.latitude,
            'longitude': position.coords.longitude
        });
    }

    
    function error() {
        console.error('Something bad happened.');
        stopWatchingPosition();
    }
    

    function stopWatchingPosition() {
        if (watcherId !== null) {
            navigator.geolocation.clearWatch(watcherId);
            setWatcherID(null);
            console.warn('Stopped watching location.');
        }
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    }

    

    useEffect(() => {
        if ('geolocation' in navigator) {
            const watcherId = navigator.geolocation.watchPosition(success, error, options);
            setWatcherID(watcherId);
        } else {
            console.error('Location servvices are disabled.');
        }
    }, [location]);


    return {
        location
    }
}