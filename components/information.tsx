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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
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