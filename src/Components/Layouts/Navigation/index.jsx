import NavItem from './NavItem/index.jsx';
import menuimage from '/imgs/navbar/menu_icon.svg'
import homeimage from '/imgs/navbar/home_icon.svg'
import buscarimage from '/imgs/navbar/search_icon.svg'
import cadastrarimage from '/imgs/navbar/register_icon.svg'
import relatoriosimage from '/imgs/navbar/relatory_icon.svg'
import helpimage from '/imgs/navbar/help_icon.svg'
import logoutimage from '/imgs/navbar/logout.svg'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../Context/AuthContext';

export default function NavBar(){
    const { logout } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return(
        <>
            <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
                <div className={styles.header}>
                    <button className={styles.headerBtn} onClick={toggleSidebar}>
                    <h2 className={styles.headerTitle}>Amor em Movimento</h2>
                        <img src={menuimage} alt="menu"/>
                    </button>
                </div> 
                <div className={styles.navItens}>
                    {/* <div className={styles.itemMenu}> */}
                        <NavItem title="Home" image={homeimage} to='/'/>
                    {/* </div>     */}
                    {/* <div className={styles.itemMenu}> */}
                        <NavItem title="Buscar" image={buscarimage} to='/search'/>
                    {/* </div>    */}
                    {/* <div className={styles.itemMenu}> */}
                        <NavItem title="Cadastrar" image={cadastrarimage} to='/register'/>
                    {/* </div>    */}
                    {/* <div className={styles.itemMenu}> */}
                        <NavItem title="Relatórios" image={relatoriosimage} to='/relatory'/>
                    {/* </div>    */}
                    {/* <div className={styles.itemMenu}> */}
                        <NavItem title="Help" image={helpimage} to='/help'/>
                    {/* </div>    */}
                </div>
                <div className={styles.logout}>
                    <button className={styles.logoutBtn} onClick={logout}> {/* Adicione o onClick */}
                        <img src={logoutimage} alt="Sair" />
                        <h2>Sair</h2>
                    </button>
                </div>
            </aside>           
        </>
    )   
}
