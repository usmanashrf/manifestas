'use client';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MateMap() {
  return (
    <div className='flex-1 h-full'>
        <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 12
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        <Marker longitude={-122.4} latitude={37.8} color='red' onClick={()=>(window.alert("longitude={-122.4} latitude={37.8}"))} >
       </Marker>

       <Marker longitude={-122.5} latitude={37.8} color='blue' onClick={()=>(window.alert("longitude={-122.5} latitude={37.8}"))} >
       </Marker>
        </Map>
    </div>
  )
}
