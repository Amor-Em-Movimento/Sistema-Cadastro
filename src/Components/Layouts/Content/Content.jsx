import Header from './Header/index.jsx';
import AppRoutes from '../../../Routes/AppRoutes.jsx';
import styles from '../Content/styles.module.css';

export default function Content () {
    return(

        <>
            <aside className={styles.content}>
                <div className={styles.contentHeader}>
                    <Header/>
                </div>
                <div className={styles.contentBody}>
                    <AppRoutes/>
                </div>
            </aside>
        </>
    )

}