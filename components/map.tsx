import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
// import {MarkerF} from '@react-google-maps/api'
import { styleMap } from "../modules/mapStyle";
import Marker from "./marker";
import { key } from '../.env/firebase'
type Props = {
    markerData: any
    sendMarker:any
  }
// const MapMarker = ({ text }) => <div>{text}</div>;
const MapComponent=({ markerData, sendMarker}:Props )=>{

  const defaultProps = {
    center: {
      lat: 37.0902,
      lng: -95.7129,
    },
    zoom: 5,
  };
  const location= (lat: any,long: any) => {
    return {lat: lat,
    lng: long}
  }
  
const marker = (userData: any) => {
    // 👇️ take parameter passed from Child component
    sendMarker(userData);
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: styleMap
      }}
      >
        {/* <MapMarker text="My Marker" /> */}
        {
       markerData.map((el:any, idx:any) => 
       <Marker 
       key={idx}
       {...location(el.lat,el.lng)}
       userObject={el}
       selectMarker={marker}
       ></Marker>)
    }

      </GoogleMapReact>
    </div>
  );
       
}

export default MapComponent;