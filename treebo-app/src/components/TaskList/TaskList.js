import TaskItem from "../TaskItem/TaskItem";
import styles from './TaskList.module.css';

const TaskList = () => {

    return (
        <div className={styles.listDiv}>
            <h2 className={styles.taskText}>Tarefas de hoje</h2>
            <div className={styles.tasksDiv}>
                    <TaskItem/>
            </div>
                <button type='button' className={styles.listButton}>Adicionar uma tarefa</button>
        </div>
    )
}

export default TaskList;