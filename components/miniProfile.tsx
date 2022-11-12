import Image from 'next/image'
import { teamModel } from '../models/teamModel'
import styles from '../styles/miniProfile.module.scss'

type Props={
    member: teamModel
}
 const MiniProfile=({member}:Props) => {
    return(
        <div>
             <Image
            // loader={myLoader}
            className={styles.profile__icon}
            src={member.imageUrl}
            alt={"Picture of " + member.name}
            width={120}
            height={120} 
            />
            <p>{member.name}</p>
            <p>{member.title}</p>
            <button>View Information</button>
        </div>
    )
}
export default MiniProfile;