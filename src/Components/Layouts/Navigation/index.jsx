import NavItem from './NavItem/index.jsx';
import menuimage from '/imgs/navbar/menu_icon.svg'
import homeimage from '/imgs/navbar/home_icon.svg'
import buscarimage from '/imgs/navbar/search_icon.svg'
import cadastrarimage from '/imgs/navbar/register_icon.svg'
import relatoriosimage from '/imgs/navbar/relatory_icon.svg'
import helpimage from '/imgs/navbar/help_icon.svg'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';


export default function NavBar(){

    return(
        <>
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <button className={styles.headerBtn}>
                        <img src={menuimage} alt="menu"/>
                    </button>
                    <h2 className={styles.headerTitle}>Amor em Movimento</h2>
                </div> 
                <div>
                    <div className={styles.itemMenu}>
                        <Link to={'/'}>
                            <NavItem title="Home" image={homeimage}/>
                        </Link>
                    </div>    
                    <div className={styles.itemMenu}>
                        <Link to={'/search'}>
                            <NavItem title="Buscar" image={buscarimage}/>
                        </Link>
                    </div>   
                    <div className={styles.itemMenu}>
                        <Link to={'/register'}>
                            <NavItem title="Cadastrar" image={cadastrarimage}/>
                        </Link>
                    </div>   
                    <div className={styles.itemMenu}>
                        <Link to={'/relatory'}>
                            <NavItem title="Relatórios" image={relatoriosimage}/>
                        </Link>
                    </div>   
                    <div className={styles.itemMenu}>
                        <Link to={'/help'}>
                            <NavItem title="Help" image={helpimage}/>
                        </Link>
                    </div>   
                </div>
                <div className={styles.logout}>
                    <button className={styles.logoutBtn}><h2>Sair</h2></button>
                </div>
            </aside>           
        </>
    )   
}
