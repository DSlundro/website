import { useMemo } from "react";
import { GoogleMap, useLoadScript, } from "@react-google-maps/api";


const Map = () => {
    const center = useMemo(() => ({lat: 45.94088, lng: 13.62167,}), [])
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
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