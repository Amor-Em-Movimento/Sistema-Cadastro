import logoAEM from '/src/assets/imgs/logotipo_amoremmovimento.png'
import profileIcon from '/src/assets/imgs/profile_icon.svg'
import styles from '../styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Context/AuthContext.jsx'

export default function Header(props){
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const pageTitles = {
        '/': 'Página Inicial',
        '/home': 'Página Inicial',
        '/search': 'Buscar Famílias',
        '/register': 'Cadastrar Família',
        '/relatory': 'Relatórios',
        '/help': 'Ajuda'
    };
    const currentTitle = pageTitles[location.pathname] || 'Amor em Movimento';

    const handleBack = () => {
        if (location.pathname === '/' || location.pathname === '/home') {
            logout();         } else {
            navigate(-1);
        }
    };

    return(
        <>
            <button className={styles.returnBtn} onClick={() => handleBack()}>
                Voltar
            </button>
            <div className={styles.title}>
                <img className={styles.headerImg}src={logoAEM} alt=""/>
                <h1>Amor em Movimento</h1>
            </div>
            <div className={styles.pageName}>{props.pageName}</div>
            <button className={styles.profileBtn} onClick={() => navigate('/profile')}>
                <img src={profileIcon} alt="Perfil"/>
                <span>Perfil</span>
            </button>
        </>
    )
}


