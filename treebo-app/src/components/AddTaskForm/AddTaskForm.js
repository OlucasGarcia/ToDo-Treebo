import styles from './AddTaskForm.module.css';

const AddTaskForm = () => {


    return (
        <div className={styles.hero}>
            <h2>Adicionar nova tarefa</h2>
            <br/>
            <form className={styles.form}>

                <label className={styles.labelForm}>Título da tarefa</label>
                <input type='text' placeholder='Digite um título' 
                className={styles.inputForm}
                ></input>

                <br />
                
                <label className={styles.labelForm}>Descrição da tarefa</label>
                <input type='text' placeholder='Digite uma descrição' 
                className={styles.inputForm}
                ></input>
                
                <button type='submit' className={styles.buttonForm}>Criar tarefa</button>
            
            </form>
        </div>
    )
}

export default AddTaskForm;