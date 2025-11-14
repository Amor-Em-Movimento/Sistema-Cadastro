import logoAEM from "../../assets/imgs/logotipo_amoremmovimento.png"
import profileIcon from "../../assets/imgs/profile_icon.svg"
import styles from "./styles.module.css"

export default function Header(props){

    return(
        <>
            <div className ={styles.header}>
                <button className={styles.returnBTN}>Voltar</button>
                <div className={styles.title}><img src={logoAEM} alt=""/><h1>Amor em Movimento</h1></div>
                <div className={styles.pageName}>{props.pageName}</div>
                <button className={styles.profileBTN}>
                    <img src={profileIcon} alt="Perfil"/>
                    <span>Perfil</span>
                </button>
            </div>
        </>
    )
}
