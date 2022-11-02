import React from 'react';
import  styles  from '../styles/Side.module.scss'
import globals from '../styles/Global.module.scss'
import { user } from '../models/userInformation';

type props = {
    userData: any
}

const SideNav=({userData}:props)=>{
    let [state,open]=React.useState(!(Object.getPrototypeOf(userData) === Object.prototype))
    function menu(){
        open(state=!state)
    }

    return(
        <div className={`${styles.container} ${state?styles.open:styles.close}` }>
            {/* <image></image> */}
            <div className={styles.closeOpenBtn}>
                <button onClick={()=>{menu()}}>{!state?"Open":"Close"}</button>
            </div>
            <div className={`${state?styles.image_container:globals.hidden}`  }>
                 {userData.picture}
            </div>
            <div className={`${state?styles.container_bottom:globals.hidden}`}>
                <h1> {userData.name} </h1>
                <h2>{userData.city}, {userData.country}</h2>
                <h2>{userData.major}</h2>
            </div>
        </div>
    )
}

export default SideNav;