import styles from './TaskNav.module.css';
import { Link } from 'react-router-dom';

const TaskNav = () => {

    return (
            <nav className={styles.navApp}>
                <Link className={styles.buttonsApp} to="list">Visualizar lista</Link>
                <Link className={styles.buttonsApp} to="add-task">Adicionar tarefa</Link>
            </nav>
    )
};

export default TaskNav;