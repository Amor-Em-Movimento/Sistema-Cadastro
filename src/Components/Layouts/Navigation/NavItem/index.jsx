import { NavLink } from 'react-router-dom'
import styles from '../styles.module.css'

export default function NavItem(props){

    return(
        <>
            <NavLink to={props.to}
                    className={({isActive}) =>
                        isActive ? styles.itemMenuSelected : styles.itemMenu
                    }
            >
                <img src={props.image} alt={props.title} />
                <h2 className={styles.itemMenuTitle}>{props.title}</h2>
            </NavLink>             
        </>
    )
}
