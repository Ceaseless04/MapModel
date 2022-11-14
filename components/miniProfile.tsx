import Image from 'next/image'
import { teamModel } from '../models/teamModel'
import styles from '../styles/miniProfile.module.scss'
import stylex from '../styles/helpComponent.module.scss'

type Props={
    member: teamModel
}
 const MiniProfile=({member}:Props) => {
    return(
        <div  className={stylex.container}>
             <Image
            // loader={myLoader}
            className={stylex.help__icon}
            src={member.imageUrl}
            alt={"Picture of " + member.name}
            width={150}
            height={150} 
            />
            <p>{member.name}</p>
            <p>{member.title}</p>
            <p>{member.summary}</p>
            <div className={styles.social_icons}>
            <a target="_blank" href={member.github || ""}>
            <button>G</button>
            </a>
            <a target="_blank" href={member.linkedin || ""}>
            <button>L</button>
            </a>
            <a target="_blank" href={member.instagram || ""}><button>I</button></a>
            </div>
            
            
        </div>
    )
}
export default MiniProfile;