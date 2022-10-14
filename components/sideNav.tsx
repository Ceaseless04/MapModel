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
                <button onClick={()=>{menu()}}>{!state?"Open":"Close"}</button>
            </div>
            <div className={`${state?styles.image_container:globals.hidden}`  }>
                 {imageUrl}
            </div>
            <div className={`${state?styles.container_bottom:globals.hidden}`}>
            <h1> {name} </h1>
            <h2>{city}, {country}</h2>
            <h2>{course}</h2>
            </div>
            
        </div>
    )
}

export default SideNav;