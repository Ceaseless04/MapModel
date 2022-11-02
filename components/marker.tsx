import styles from '../styles/Marker.module.scss'

type Props = {
    // send object from firebase 
    pictureUrl: string;
    name: string;
    uid: string;
    userObject: any;
    selectMarker:any
}

const Marker=({pictureUrl,uid,name, userObject, selectMarker}:Props )=>{
    return(
        <div className={styles.marker} onClick={event => selectMarker(userObject)}>
            {name}
        </div>        
    )
}

export default Marker;