import { useMemo } from "react";
import { GoogleMap, useLoadScript, } from "@react-google-maps/api";

const API_KEY = 'AIzaSyBn-q0VMtMOum5A7HVG86duHeJApbVDv7o'

const Map = () => {
    const center = useMemo(() => ({lat: 45.94088, lng: 13.62167,}), [])
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: API_KEY
    })
    if(!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap
            id="map"
            zoom={15}
            center={center}
            mapContainerClassName='w-full h-[400px]'
            mapTypeId="hybrid"
        />
    );
}
export default Map;