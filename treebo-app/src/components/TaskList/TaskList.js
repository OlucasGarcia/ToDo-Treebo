import { Link } from "react-router-dom";
import TaskItem from "../TaskItem/TaskItem";
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
        <div className="flex mt-10 items-center text-center flex-1 flex-col text-gray-100">
            <h2 className="text-3xl font-bold">Tarefas de hoje</h2>
            <div className="mt-10 w-full">
                {tarefas.map((tarefa) => (
                    <TaskItem tarefa={tarefa}
                    onClickDelete={deletarTarefa}
                    />
                ))}
            </div>
                <Link className="flex mt-10 mb-10 w-auto min-h-5 text-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" to="/add-task">ADICIONAR TAREFA</Link>
        </div>
    )
}

export default TaskList;