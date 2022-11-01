import React from "react";
import GoogleMapReact from "google-map-react";
// import {MarkerF} from '@react-google-maps/api'

import Marker from "./marker";

// const MapMarker = ({ text }) => <div>{text}</div>;
const MapComponent=()=>{
    
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
  const styleMap = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
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
        
        <Marker 
        {...location(59.955413,30.337844)}
        pictureUrl="" 
        name="Leon"
        ></Marker>
        
        <Marker 
        {...location(25.7617,25.7617)}
        pictureUrl="" 
        name="Leon"
        ></Marker>

      </GoogleMapReact>
    </div>
  );
       
}

export default MapComponent;