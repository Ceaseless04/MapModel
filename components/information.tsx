import { teamMembers } from "../modules/team"
import { help } from '../modules/help'
import HowTo from "./howto"
import styles from '../styles/Information.module.scss'


const InformationComponent=()=>{
    return(
        <div className={styles.parent}>
            <h1>How To</h1>
         
            {/* {
                teamMembers.map((value,index)=>{
                    return <p key={index}>{value.name}</p>
                })
            } */}
            <div className={styles.child}>
                {
                help.map((value,index)=>{
                    return <HowTo key={index} step={value}></HowTo>
                })
            }
            </div>
            <p>We can add more information about ...</p>
        </div>
    )
}
export default InformationComponent