import styles from '../styles/Error.module.scss'
import { codes }  from '../modules/errorCodes' 
import { useEffect } from 'react';
type Props = {
    code: number;
    boolean: boolean;
    isError: boolean;
}

const Error=({code,boolean,isError}:Props)=>{
    return(
        <div className={
            !isError?
            boolean?`${styles.container} ${styles.container__success} ${styles.transformed}`:`${styles.container} ${styles.container__success} ${styles.hidden}`:
            boolean?`${styles.container} ${styles.container__error} ${styles.transformed}`:`${styles.container}  ${styles.container__error} ${styles.hidden}`}>
            <p>{codes[code as keyof typeof codes]}</p>
        </div>        
    )
}

export default Error;
