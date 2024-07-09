import { Link } from "react-router-dom";
import TaskItem from "../TaskItem/TaskItem";
import styles from './TaskList.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const TaskList = ({ id }) => {

    const [ tarefas, setTarefas ] = useState([]);
    const navigate = useNavigate();

    function deletarTarefa() {
        if(id) {
            axios.delete(`http://localhost:5000/tarefas/${id}`)
            .then((response) => {
                navigate('/list');
            })
        }
    }

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
                    <TaskItem tarefa={tarefa}
                    onClickDelete={deletarTarefa}
                    />
                ))}
            </div>
                <Link className={styles.listButton} to="/add-task">ADICIONAR TAREFA</Link>
        </div>
    )
}

export default TaskList;