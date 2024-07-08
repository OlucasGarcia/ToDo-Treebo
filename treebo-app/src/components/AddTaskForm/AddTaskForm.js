import styles from './AddTaskForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const inicialValue = {
    title: '',
    desc: '',
}

const AddTaskForm = () => {

    const [values, setValues] = useState(inicialValue);
    const navigate = useNavigate();

    function onChange(e) {
        const { name, value } = e.target;


        setValues({ ...values, [name]: value });
    }

    function onSubmit(e) {
        e.preventDefault(); 
        

        axios.post('http://localhost:5000/tarefas', values)
        .then((response) => {
            navigate('/list');
        })

    }

    return (
        <div className={styles.hero}>
            <h2>Adicionar nova tarefa</h2>
            <br/>
            <form className={styles.form} onSubmit={onSubmit}>

                <label className={styles.labelForm} htmlFor="title">Título da tarefa</label>
                <input type='text' placeholder='Digite um título' 
                className={styles.inputForm}
                id="title" name="title"
                onChange={onChange}
                />
                <br />
                
                <label className={styles.labelForm} htmlFor="desc">Descrição da tarefa</label>
                <input type='text' placeholder='Digite uma descrição' 
                className={styles.inputForm}
                id="desc" name="desc"
                onChange={onChange}
                />
                
                <button type='submit' className={styles.buttonForm}>Criar tarefa</button>
            
            </form>
        </div>
    )
}

export default AddTaskForm;