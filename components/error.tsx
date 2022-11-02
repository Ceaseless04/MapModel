import styles from '../styles/Error.module.scss'
import { codes }  from '../models/errorCodes' 
import { useEffect } from 'react';
type Props = {
    code: number;
    boolean: boolean;
}

const Error=({code,boolean}:Props)=>{
    return(
        <div className={boolean?`${styles.container} ${styles.transformed}`:`${styles.container} ${styles.hidden}`}>
            <p>{codes[code as keyof typeof codes]}</p>
        </div>        
    )
}

export default Error;
