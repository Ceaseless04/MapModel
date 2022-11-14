import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
// import {MarkerF} from '@react-google-maps/api'
import { styleMap } from "../modules/mapStyle";
import CustomMarker from "./marker";
import sty  from "../styles/Marker.module.scss"
import { key } from '../.env/firebase'
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer, OverlayView } from "@react-google-maps/api";
type Props = {
    markerData: any
    sendMarker:any
  }
// const MapMarker = ({ text }) => <div>{text}</div>;
const MapComponent=({ markerData, sendMarker}:Props )=>{
  const containerStyle = { height: "100vh", width: "100%" }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [map, setMap] = React.useState(null as any)

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(defaultProps.center);
    markerData.forEach((position: any) => bounds.extend({lat: position.lat, lng: position.lng}));
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

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
    <div style={containerStyle}>
      { isLoaded && <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: -3.745,
          lng: -38.523
        }}
        zoom={defaultProps.zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
         {
           <MarkerClusterer options={markerData}>
           {(clusterer) =>
           markerData.map((el:any, idx:any) => 
          //  <Marker 
       
          //   // icon={el.picture}
          //   shape={google.maps.MarkerShape.}
          //   key={idx}
          //   clusterer={clusterer}
          //           position={location(el.lat,el.lng)}
          //           onClick={() => marker(el)}
          //   />
          <OverlayView
          key={idx}
          position={location(el.lat,el.lng)}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
              {
                <CustomMarker userObject={el} selectMarker={marker}/>
                  
              } 
            
            </OverlayView>
                  )
           
           
           }
           </MarkerClusterer>
        }
      </GoogleMap>}
    </div>
  );
       
}

export default MapComponent;