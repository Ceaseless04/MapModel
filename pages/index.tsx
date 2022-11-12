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
import Popup from '../components/popup';


const dbInstance = collection(firestore, 'users');

const Home: NextPage = () => {
  let [err, setError] = React.useState({ active: false, code: 0 });
  const [selectedMarker, selectMarker] = useState({} as any);
  const [markerData, addMarkers] = useState([] as any[])
   const [selected, select] = useState({show: true, dataType:"information"})

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
  useEffect(()=>{
       getData();
  },[]);

  function selectI(param: string){
      select({show: true,dataType:param})
      console.log(selected.show)
  }

  return (
    <div>
      <Popup show={selected.show} dataType={selected.dataType}></Popup>
        <SideNav userData={selectedMarker}></SideNav>
        <div className={style.right}>
          <button>Information</button>
          <button>Add Yourself to map</button>

          
          <button onClick={()=>getData()}>get Data</button>
          <button onClick={()=>selectI("information")}>
            
            show information</button>
        </div>
      
      <div className={style.map}>
        <MapComponent sendMarker={marker} markerData={markerData}></MapComponent>
      </div>      
      <Error code={err.code} boolean={err.active} isError={true}></Error>
    </div>
  );
};

export default Home; 