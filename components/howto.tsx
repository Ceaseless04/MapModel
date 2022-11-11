import Image from 'next/image'
import { teamModel } from '../models/teamModel'
import styles from '../styles/helpComponent.module.scss'
import {step} from '../models/step'

type props={
    step:step
}

const HowTo=({step}:props)=>{
   return(
    <div className={styles.container}>
         <Image
            // loader={myLoader}
            className={styles.help__icon}
            src={step.imageUrl}
            alt={"Picture of " + step.imageAria}
            width={250}
            height={250} 
            />
            
            <h2 className={styles.title}>{step.title}</h2>
            <p className={styles.details}>{step.details}</p>
    </div>
   )
}
export default HowTo