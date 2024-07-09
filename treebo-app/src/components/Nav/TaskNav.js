import { Link } from 'react-router-dom';

const TaskNav = () => {

    return (
            <nav className="mt-10">
                <Link className="flex w-full min-h-10 text-center mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" to="list">Visualizar lista</Link>
                <Link className="flex w-full min-h-10 text-center mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" to="add-task">Adicionar tarefa</Link>
            </nav>
    )
};

export default TaskNav;