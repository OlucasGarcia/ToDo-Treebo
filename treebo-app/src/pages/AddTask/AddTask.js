import { useParams } from "react-router-dom";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const PagesAddTaks = () => {

    const { id } = useParams();

    return (
        <div className="flex justify-center min-w-96">
            <AddTaskForm id={id ? Number.parseInt(id, 10) : null}/>
        </div>
    )
}

export default PagesAddTaks;