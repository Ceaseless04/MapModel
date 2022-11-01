import styles from '../styles/Marker.module.scss'

type Props = {
    
    pictureUrl: string;
    name: string;
}

const Marker=({pictureUrl,name}:Props)=>{
    return(
        <div className={styles.marker}>
            {name}
        </div>        
    )
}

export default Marker;