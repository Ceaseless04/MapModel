import { teamMembers } from "../modules/team"
import { help } from '../modules/help'
import HowTo from "./howto"
import styles from '../styles/Information.module.scss'
import MiniProfile from "./miniProfile"
import { popups } from '../modules/popups'

 type Props={
    page: any
 }

const InformationComponent=({page}:Props)=>{
    return(
        <div className={styles.inherit}>
 
            <div className={styles.parent}>
            { 
            page === popups.information &&
                <h2>How To</h2>}
              { 
            page === popups.team &&
                <h2>Meet the team</h2>}
             {   page === popups.information &&  
                <div className={styles.child}>
                    {
                    help.map((value,index)=>{
                        return <HowTo key={index} step={value}></HowTo>
                    })
                }
                </div> 
                }
                { 
            page === popups.information &&
                <p> MapMe is a website in which users are able to create a profile with their names, major, city, and country. Users are then able to see their own profile and other users profile. Feeling adventorous? Start by following the how to steps and explore your peers cultures!   
                    <br></br>We hope you enjoyed the experience!</p>
}
              
{ 
            page === popups.team &&
                <div className={styles.child}>
                    {
                    teamMembers.map((value,index)=>{
                        return <MiniProfile key={index} member={value}></MiniProfile>
                    })
                }
                </div> }
                 
            </div>
           
        </div>
       
    )
}
export default InformationComponent