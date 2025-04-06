import React from "react";
import './TaskItem.css'

const TaskItem = ({tarefa, deletar}) => {
    
    
    return(
        <div className="task-item" >
            <p>{tarefa}</p>
            <img src="imagens/lightEdit.png" alt="editButton" className="editbtt"/>
            <input type="checkbox"/>
            <img src="imagens/lightTrash.png" alt="lixeira" onClick={deletar} className="deletebtt"/>
            <hr/>
        </div>
        

    )
}

export default TaskItem