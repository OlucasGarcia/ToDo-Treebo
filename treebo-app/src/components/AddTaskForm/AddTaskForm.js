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
        if (id) {
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
        <div className="mt-10 text-gray-900 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-lg bg-white">
            <h2 className="text-3xl font-bold text-center">Adicionar nova tarefa</h2>
            <br />
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm" onSubmit={onSubmit}>
                <label 
                className="block font-bold text-left ml-2 text-lg  leading-6 text-white-900" 
                htmlFor="title"
                >Título da tarefa</label>

                <div className="mt-2">
                    <input type='text' placeholder='Digite um título'
                        className="block w-full pl-2 bg-gray-900 rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        id="title" name="title"
                        onChange={onChange}
                        value={values.title}
                    />
                </div>
                <label 
                className="block text-left ml-2 text-lg font-bold leading-6 text-white-900 mt-10 " 
                htmlFor="desc">Descrição da tarefa</label>

                <div className="mt-2">
                    <input type='text' placeholder='Digite uma descrição'
                        className="block w-full pl-2 bg-gray-900 rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        id="desc" name="desc"
                        onChange={onChange}
                        value={values.desc}
                    />
                </div>

                <br />
                <div className="mt-2">
                    <button type='submit' className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SALVAR TAREFA</button>
                </div>

            </form>
            </div>
        </div>
    )
}

export default AddTaskForm;