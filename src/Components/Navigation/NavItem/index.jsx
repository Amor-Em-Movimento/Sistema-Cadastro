import styles from "../../Navigation/styles.module.css"

export default function NavItem(props){

    return(
        <>
            <div className={styles.itemMenu}>
                <img src={props.image} alt={props.title} />
                <h2 className={styles.itemMenuTitle}>{props.title}</h2>
            </div>             
        </>
    )
}