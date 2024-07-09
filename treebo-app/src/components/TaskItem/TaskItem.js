import styles from './TaskItem.module.css';
import { Link } from "react-router-dom";


const TaskItem = ({ tarefa, onClickDelete }) => {

    return (
        <div className={styles.taskDiv}>

            <div className={styles.taskInfo}>
                <p className={styles.taskText}>{tarefa.title}</p>
                <p>-</p>
                <p className={styles.taskText}>{tarefa.desc}</p>
            </div>
            <div className={styles.taskDivButtons}>
                <button className={styles.taskButton}>CONCLUIR</button>
                <Link style={{backgroundColor: "rgb(70, 190, 92)"}} className={styles.taskButton} to={`/edit-task/${tarefa.id}`}>EDITAR</Link>
                <Link style={{backgroundColor: "rgb(249, 53, 53)"}} className={styles.taskButton} onClick={onClickDelete}>EXCLUIR</Link>
            </div>
        </div>
    )
}

export default TaskItem;