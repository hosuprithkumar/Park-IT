import React from 'react';
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function MapContainer(){
    const lib = ["places"];
    const key = "AIzaSyA8hu0eCZvnP6UG4lHJ9nxWECRtMIvdvXk"; // PUT GMAP API KEY HERE
    return (
    <div className='map-container'>
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
    </div>
    )
}