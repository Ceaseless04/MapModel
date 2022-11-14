import React from 'react';
import  styles  from '../styles/Side.module.scss'
import globals from '../styles/Global.module.scss'
import home from '../styles/Home.module.scss'
import { user } from '../models/userInformation';
import { SERVER_PROPS_ID } from 'next/dist/shared/lib/constants';
// import 'material-icons/iconfont/material-icons.css';

type props = {
    userData: any
}

const SideNav=({userData}:props)=>{
    let [state,open]=React.useState(!(Object.getPrototypeOf(userData) === Object.prototype))
    let hasData = Boolean(Object.keys(userData).length)
    function menu(){
        // returned to original state => Kris
        open(state=!state)
    }

    return(
        <div className={`${styles.container} ${state?styles.open:styles.close}` }>
            {/* <image></image> */}
            <div className={styles.closeOpenBtn}>
                <button className={styles.button} onClick={()=>{menu()}}><span className="material-icons">{!state?"arrow_forward_ios":"close"}
                    </span></button>             
            </div>
            {
                hasData &&<div className={`${state?styles.image_container:globals.hidden}`  }>
                 
                <img className={styles.profilePic} src={userData.picture} object-fit='cover' />
             </div>
            }
            {
                hasData && <div className={`${state?styles.container_bottom:globals.hidden}`}>
                <h1 className={styles.name}> {userData.name} </h1>
                <h2 className={styles.locationf}> Location </h2>
                <h2 className={styles.location}>{userData.city}, {userData.country}</h2>
                <h1 className={styles.majorf}> Major </h1>
                <h2 className={styles.major} >{userData.major}</h2>
           </div>
            }
            {
                !hasData && <div className={`${state?`${styles.container_bottom} ${styles.container_bottom_no_data}`:globals.hidden} `}>
                    Select a marker to see the data here or add your information below
                    
                </div>
            }
            
        </div>
    )
}

export default SideNav;