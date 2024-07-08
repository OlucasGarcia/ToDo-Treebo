import styles from './TaskItem.module.css';


const TaskItem = ({tarefa}) => {

    return (
        <div className={styles.taskDiv}>

            <div className={styles.taskInfo}>
                <button className={styles.taskButton}>CONCLUIR</button>
                <p className={styles.taskText}>{tarefa.title}</p>
            </div>
            <details className={styles.taskDetails}>
                <summary>Ver detalhes</summary>
                <p className={styles.taskText}>{tarefa.desc}</p>
            </details>
        </div>
    )
}

export default TaskItem;