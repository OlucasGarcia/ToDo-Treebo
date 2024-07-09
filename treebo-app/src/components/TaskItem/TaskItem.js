import { Link } from "react-router-dom";


const TaskItem = ({ tarefa, onClickDelete }) => {

    return (
        <div className="min-w-full inline-flex items-center border-b-2 border-gray-200 justify-between gap-x-6 justify-center">

            <div className="flex ml-5 text-center gap-5 items-center">
                <p className="text-lg font-bold">{tarefa.title}</p>
                <p>-</p>
                <p className="text-lg text-gray-300">{tarefa.desc}</p>
            </div>
            <div className="flex justify-between py-3.5 gap-x-3 items-center mr-5" >
                <button className="flex w-28 min-h-5 text-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">CONCLUIR</button>
                <Link className="flex w-28 min-h-5 text-center justify-center rounded-md bg-green-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" to={`/edit-task/${tarefa.id}`}>EDITAR</Link>
                <Link className="flex w-28 min-h-5 text-center justify-center rounded-md bg-red-500 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={onClickDelete}>EXCLUIR</Link>
            </div>
        </div>
    )
}

export default TaskItem;