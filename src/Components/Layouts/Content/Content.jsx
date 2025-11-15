import Header from './Header/index.jsx';
import AppRoutes from '../../../Routes/AppRoutes.jsx';
import styles from '../Content/styles.module.css';

export default function Content () {
    return(

        <>
            <aside >
                <div className={styles.header}>
                    <Header/>
                </div>
                <div className={styles.content}>
                    <AppRoutes/>
                </div>
            </aside>
        </>
    )

}