import NavItem from "./NavItem";
import MenuImage from "../../assets/imgs/navbar/menu_icon.svg"
import HomeImage from "../../assets/imgs/navbar/home_icon.svg"
import BuscarImage from "../../assets/imgs/navbar/search_icon.svg"
import CadastrarImage from "../../assets/imgs/navbar/register_icon.svg"
import RelatoriosImage from "../../assets/imgs/navbar/relatory_icon.svg"
import HelpImage from "../../assets/imgs/navbar/help_icon.svg"
import styles from "../Navigation/styles.module.css"

export default function NavBar(){

    return(
        <>
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <button className={styles.headerBtn}>
                        <img src={MenuImage} alt=""/>
                    </button>
                    <h2 className={styles.headerTitle}>Amor em Movimento</h2>
                </div> 
                <div>
                    <div className={styles.itemMenu}><NavItem title="Home" image={HomeImage}/></div>    
                    <div className={styles.itemMenu}><NavItem title="Buscar" image={BuscarImage}/></div>   
                    <div className={styles.itemMenu}><NavItem title="Cadastrar" image={CadastrarImage}/></div>   
                    <div className={styles.itemMenu}><NavItem title="Relatórios" image={RelatoriosImage}/></div>   
                    <div className={styles.itemMenu}><NavItem title="Help" image={HelpImage}/></div>   
                </div>
                <div className={styles.logout}>
                    <button className={styles.logoutBtn}>Sair</button>
                </div>
            </div>           
        </>
    )    
}
