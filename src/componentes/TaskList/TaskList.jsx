import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css'

const TaskList = ({tarefas, deletar, mudou, concluidas, alterar}) => {
    
    return(
        <div className="tarefas">
            <h1>Tarefas</h1> 
            <select name="" id="">
                <option>Todas</option>
                <option>Pendentes</option>
                <option>Concluidas</option>
            </select>

            {tarefas.map((tarefa, index) => (
            <TaskItem key={index} tarefa={tarefa} index={index} deletar={deletar} mudou={mudou} alterar={alterar}/>))}
        </div>  

    )
}

export default TaskList