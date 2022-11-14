import { setDefaultResultOrder } from "dns";
import { useEffect, useState } from "react";
import MapComponent from "../components/map";
import type { NextPage } from "next";
import React from "react";
import Error from "../components/error";
import SideNav from "../components/sideNav";
import style from "../styles/Home.module.scss";
import { user } from "../models/userInformation";
import "material-icons/iconfont/material-icons.css";
import { app, firestore } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Popup from "../components/popup";
import { popups } from "../modules/popups";
import { copyFile } from "fs/promises";

const dbInstance = collection(firestore, "users");

const Home: NextPage = () => {
  let [err, setError] = React.useState({ active: false, code: 0 });
  const [selectedMarker, selectMarker] = useState({} as any);
  const [markerData, addMarkers] = useState([] as any[]);
  const [markerCopyData, copy] = useState([] as any[]);
  const [selected, select] = useState({ show: true, dataType: "information" });

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
  const getData = () => {
    addMarkers((oldArray) => []);
    getDocs(dbInstance).then((data) => {
      data.docs.map((item) => {
        let val = { ...item.data(), id: item.id } as any;
        addMarkers((oldArray) => [...oldArray, val]);
        copy((oldArray) => [...oldArray, val]);
        return val;
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleLocation = (filter: any) => {
    if (filter[0] || filter[1]) {
      var countries: any[] = [];
      var majors: any[] = [];
      if (filter[0].length > 0 || filter[1].length > 0) {
        if (filter[0].length > 0) {
          countries = markerData.filter((val, idx) => {
            if (
              val.country.toLowerCase().trim() ===
              filter[0].toLowerCase().trim()
            ) {
              return val;
            }
          });
        }
        if (filter[1].length > 0) {
          majors = markerData.filter((value, idx) => {
            if (
              value.major.toLowerCase().trim() ===
              filter[1].toLowerCase().trim()
            ) {
              return value;
            }
          });
        }
        copy(Array.from(new Set([...countries, ...majors])));
      }
    }
    else{
      copy(markerData)
    }
    // else{
    //   getData()
    // }
  };

<<<<<<< HEAD
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
      
=======
  return (
    <div>
      <Popup dataType={popups.information} handleClick={null}></Popup>
      <Popup dataType={popups.filter} handleClick={handleLocation}></Popup>
      <Popup dataType={popups.team} handleClick={null}></Popup>
      <SideNav userData={selectedMarker}></SideNav>
      <button className={style.addPerson}>
        <span className="material-icons">add</span>
        <p>Add yourself to the map</p>
      </button>
>>>>>>> e5e6e0dd79b3c734bbb1acee4d63fa61bf99c801
      <div className={style.map}>
        <MapComponent
          sendMarker={marker}
          markerData={markerCopyData}
        ></MapComponent>
      </div>
      <Error code={err.code} boolean={err.active} isError={true}></Error>
    </div>
  );
};

export default Home; 