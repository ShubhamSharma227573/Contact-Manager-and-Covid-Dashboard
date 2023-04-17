import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import "leaflet/dist/leaflet.css";
import { showMapData } from '../Table/utils';



function Map({countries,casesType,center , zoom}) {
  return (
    <div className='map'>
    <MapContainer center={center} zoom={zoom} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        />
        {showMapData(countries, casesType)}
      </MapContainer>
      
    </div>
  )
}

export default Map;
