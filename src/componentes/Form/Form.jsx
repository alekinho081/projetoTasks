import React from "react";
import InputText from '../InputText/InputText'
import ButtonNew from "../ButtonNew/ButtonNew";
import TaskList from "../TaskList/TaskList";
import './Form.css'
import { useState } from "react";

const Form = () => {
    let [tarefa, setTarefa] = useState('')
    let [tarefas, setTarefas] = useState([])
    let [tarefConc, setConclu] = useState([])

    const aoEnviar = (event) =>{
        event.preventDefault()

        if(tarefa.trim()){
            setTarefas([...tarefas, tarefa]); 
            setTarefa('');
        }
    }

    const deletarTarefa = (id_Tarefa) => {
        const delTarefa = tarefas.filter((_, index) => index !== id_Tarefa);
        setTarefas(delTarefa);
    };

    const aoMarcar = (id_Tarefa) => {
        
        if(tarefConc[id_Tarefa] === id_Tarefa){
            const delTarefa = tarefConc.filter(tarefa => tarefa !== id_Tarefa);
            setConclu(delTarefa);
        }else{
            setConclu([...tarefConc, id_Tarefa])
        }
        console.log(tarefConc)
    }

    const alterarArray = (index) => {
        let novaTarefa = prompt('digite sua nova tarefa')
        tarefas.splice(index, 1, novaTarefa)
        setTarefas([...tarefConc, novaTarefa]);
    }
    
    

    return (
        <div className="form-caixa">
            <div className="form">
                <form onSubmit={aoEnviar}>
                    <InputText valor={tarefa} aoMudar={valor => setTarefa(valor)}  />
                    <ButtonNew type="submit"/>
                </form>
            </div>
            <TaskList tarefas={tarefas} deletar={deletarTarefa} mudou={aoMarcar} concluidas={tarefConc} alterar={alterarArray}/>
        </div>

    )
}

export default Form