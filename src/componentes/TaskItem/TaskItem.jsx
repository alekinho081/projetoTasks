import React from "react";
import './TaskItem.css'

const TaskItem = ({tarefa, deletar,index, mudou, alterar}) => {
    
    
    return(
        <div className="task-item" >
            <p>{tarefa}</p>
            <img src="imagens/lightEdit.png" alt="editButton" className="editbtt" onClick={() => alterar(index)}/>
            <input type="checkbox" onChange={() => mudou(index)}/>
            <img src="imagens/lightTrash.png" alt="lixeira" onClick={() => deletar(index)} className="deletebtt"/>
            <hr/>
        </div>
        

    )
}

export default TaskItem