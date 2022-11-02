import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
// import {MarkerF} from '@react-google-maps/api'
import { styleMap } from "../models/mapStyle";
import Marker from "./marker";
type Props = {
    markerData: any
    sendMarker:any
  }
// const MapMarker = ({ text }) => <div>{text}</div>;
const MapComponent=({ markerData, sendMarker}:Props )=>{

  const defaultProps = {
    center: {
      lat: 25.7617,
      lng: 25.7617,
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
        bootstrapURLKeys={{ key: "AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: styleMap
      }}
      >
        {/* <MapMarker text="My Marker" /> */}
        {
       markerData.map((el:any) => 
       <Marker 
       {...location(el.lat,el.lng)}
       pictureUrl="" 
       name="leon"
       uid="uid"
       userObject={el}
       selectMarker={marker}
       ></Marker>)
    }

      </GoogleMapReact>
    </div>
  );
       
}

export default MapComponent;