import styles from './AddTaskForm.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const inicialValue = {
    title: '',
    desc: '',
}

const AddTaskForm = ({ id }) => {

    const [values, setValues] = useState(inicialValue);
    const navigate = useNavigate();

    useEffect(() => {
        if(id) {
            axios.get(`http://localhost:5000/tarefas/${id}`)
            .then((response) => {
                setValues(response.data);
            })
        }
    }, [])

    function onChange(e) {
        const { name, value } = e.target;


        setValues({ ...values, [name]: value });
    }

    function onSubmit(e) {
        e.preventDefault(); 

        const method = id ? 'put' : 'post';
        const url = id
        ? `http://localhost:5000/tarefas/${id}`
        : 'http://localhost:5000/tarefas'
        

        axios[method](url, values)
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
                value={values.title}
                />
                <br />
                
                <label className={styles.labelForm} htmlFor="desc">Descrição da tarefa</label>
                <input type='text' placeholder='Digite uma descrição' 
                className={styles.inputForm}
                id="desc" name="desc"
                onChange={onChange}
                value={values.desc}
                />
                
                <button type='submit' className={styles.buttonForm}>SALVAR TAREFA</button>
            
            </form>
        </div>
    )
}

export default AddTaskForm;