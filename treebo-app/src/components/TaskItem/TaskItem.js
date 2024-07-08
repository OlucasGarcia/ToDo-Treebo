import styles from './TaskItem.module.css';


const TaskItem = () => {

    return (
        <div className={styles.taskDiv}>

            <div className={styles.taskInfo}>
                <button className={styles.taskButton}>CONCLUIR</button>
                <p className={styles.taskText}>NOME DA TAREFA</p>
            </div>
            <details className={styles.taskDetails}>
                <summary>Ver detalhes</summary>
                <p className={styles.taskText}>DESCRIÇÃO DA TAREFA</p>
            </details>
        </div>
    )
}

export default TaskItem;