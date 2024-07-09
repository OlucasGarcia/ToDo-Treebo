import { useParams } from "react-router-dom";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const PagesAddTaks = () => {

    const { id } = useParams();

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "50%"
        }}>
            <AddTaskForm id={id ? Number.parseInt(id, 10) : null}/>
        </div>
    )
}

export default PagesAddTaks;