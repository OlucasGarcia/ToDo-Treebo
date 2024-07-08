import { Link } from "react-router-dom";
import TaskItem from "../TaskItem/TaskItem";
import styles from './TaskList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TaskList = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tarefas')
        .then((response) => {
            setTarefas(response.data);
        });
    }, []);

    return (
        <div className={styles.listDiv}>
            <h2 className={styles.taskText}>Tarefas de hoje</h2>
            <div className={styles.tasksDiv}>
                {tarefas.map((tarefa) => (
                    <TaskItem tarefa={tarefa}/>
                ))}
            </div>
                <Link type='button' className={styles.listButton} to="/add-task">Adicionar uma tarefa</Link>
        </div>
    )
}

export default TaskList;