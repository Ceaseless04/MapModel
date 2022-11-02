import React from 'react';
import  styles  from '../styles/Side.module.scss'
import globals from '../styles/Global.module.scss'

type props = {
    imageUrl: string;
    name: string;
    city: string;
    country: string;
    course: string;
}

const SideNav=({imageUrl,name,city,country,course}:props)=>{
    let [state,open]=React.useState(true)
    function menu(){
        open(state=!state)
    }
    return(
        <div className={`${styles.container} ${state?styles.open:styles.close}` }>
            {/* <image></image> */}
            <div className={styles.closeOpenBtn}>
                <button onClick={()=>{menu()}}>{!state?"Open":"X"}</button>
            </div>
            <div className={`${state?styles.image_container:globals.hidden}`  }>
                 {imageUrl}
            </div>
            <div className={`${state?styles.container_bottom:globals.hidden}`}>
            <h1 className={styles.namef}> Name </h1>
            <h1 className={styles.name}> {name}</h1>
            <h1 className={styles.majorf}> Major </h1>
            <h2 className={styles.course}>{course}</h2>
            <h2 className={styles.locationf}> Location </h2>
            <h2 className={styles.location}>{city},{country}</h2>
    </div>
            
        </div>
    )
}

export default SideNav;