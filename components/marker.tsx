import styles from '../styles/Marker.module.scss'
import Image from 'next/image'
type Props = {
    // send object from firebase 
   
    userObject: any;
    selectMarker:any
}

const Marker=({ userObject, selectMarker}:Props )=>{
    return(
        // <div className={styles.marker} onClick={event => selectMarker(userObject)}>
        //     <Image
        //     // loader={myLoader}
        //     src={userObject.picture}
        //     alt={"Picture of " + userObject.name}
        //     width={200}
        //     height={200}
        //     />
        //     {userObject.name}
        // </div>    
        <div className={styles.marker} onClick={event => selectMarker(userObject)}>
            <Image
            // loader={myLoader}
            className={styles.marker__img}
            src={userObject.picture}
            alt={"Picture of " + userObject.name}
            width={120}
            height={120} 
            />
        </div>   
    )
}

export default Marker;