import React from 'react';
import  styles  from '../styles/Side.module.scss'
import globals from '../styles/Global.module.scss'
import { user } from '../models/userInformation';
import 'material-icons/iconfont/material-icons.css';

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
                <button className={styles.button} onClick={()=>{menu()}}><span className="material-icons">{!state?"arrow_forward_ios":"close"}
</span></button>
            </div>
            <div className={`${state?styles.image_container:globals.hidden}`  }>
                 {/* {userData.picture} */}
                {/* create image component */}
                <img className={styles.profilePic} src={userData.picture} object-fit='cover' />
                {/* Use line below to test with an image
                <img className={styles.profilePic} src={"https://images.ctfassets.net/usf1vwtuqyxm/5bqVQEImJpoPAciVRNQqFu/336875e94b38fac41c7c1bed3336dcf6/SHP---Hero-Mob.jpg"} object-fit='cover' /> */}
            </div>
            <div className={`${state?styles.container_bottom:globals.hidden}`}>
                 <h1 className={styles.name}> {userData.name} </h1>
                 <h2 className={styles.locationf}> Location </h2>
                 <h2 className={styles.location}>{userData.city}, {userData.country}</h2>
                 <h1 className={styles.majorf}> Major </h1>
                 <h2 className={styles.major} >{userData.major}</h2>
            </div>
        </div>
    )
}

export default SideNav;