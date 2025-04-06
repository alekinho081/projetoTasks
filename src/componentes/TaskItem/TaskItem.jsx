import React from "react";
import './TaskItem.css'

const TaskItem = ({tarefa, deletar}) => {
    
    
    return(
        <div className="task-item" >
            <p>{tarefa}</p>
            <img src="imagens/darkTrash.png" alt="lixeira" onClick={deletar} />
            <hr/>
        </div>
        

    )
}

export default TaskItem