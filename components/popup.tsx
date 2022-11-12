import { useState } from 'react'
import styles from '../styles/Popup.module.scss'
import InformationComponent from './information'

type props={
    dataType:any
    show:boolean
}
const Popup=({dataType,show}:props)=>{
    const [showPop, display] = useState(show);

    return(
   <div>
    {
        showPop && <div className={styles.parent}>
        <p onClick={()=>{
            display(!showPop)
        }}>{showPop}</p>
        {
            dataType=="information" &&    <InformationComponent></InformationComponent>
        }        
    </div>
    }
   </div>
    
    )
}
export default Popup;