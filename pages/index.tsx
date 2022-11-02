import { setDefaultResultOrder } from 'dns';
import { useEffect, useState } from 'react';
import MapComponent from '../components/map';
import type { NextPage } from "next";
import React from "react";
import Error from "../components/error";
import SideNav from "../components/sideNav";
import style from "../styles/Home.module.scss"
import { user } from "../models/userInformation"

import { app, firestore } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';


const dbInstance = collection(firestore, 'users');

const Home: NextPage = () => {
  let [err, setError] = React.useState({ active: false, code: 0 });
  const [selectedMarker, selectMarker] = useState({} as any);
  const [markerData, addMarkers] = useState([] as any[])

  async function error(code: number) {
    setError({ active: !err.active, code: code });
    if (!err.active) {
      await new Promise((f) => setTimeout(f, 3000));
      // restore defaults
      setError({ active: err.active, code: code });
    }
  }

  const marker = (id: any) => {
    // 👇️ take parameter passed from Child component
    selectMarker(id);
  };
  // to call error call error(code)
  // the code is in errorCodes.tsx
  const getData = () =>{
    addMarkers(oldArray=>[])
    getDocs(dbInstance)
          .then((data) => {
              data.docs.map((item) => {
                let val = { ...item.data(), id: item.id } as any
                console.log(markerData)
                addMarkers(oldArray=>[...oldArray,val])
                return val
            })
  })
  }
  return (
    <div>
<<<<<<< HEAD
      <div className={style.parent}>
        <SideNav  imageUrl="imageUrl" name="Harry Potter" course="magic" city="hogwarts" country="United Kingdom"></SideNav>
=======
        <SideNav userData={selectedMarker}></SideNav>
>>>>>>> c09add9c92fd5e8ac52cf76d440e78025f2cc05b
        <div className={style.right}>
          <button>Information</button> 
          <button
            onClick={() =>  error(1)} >
            activate error
          </button>
          <button onClick={()=>getData()}>get Data</button>
        </div>
      
      <div className={style.map}>
        <MapComponent sendMarker={marker} markerData={markerData}></MapComponent>
      </div>      
      <Error code={err.code} boolean={err.active}></Error>
    </div>
  );
};

export default Home;
