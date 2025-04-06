import React from "react";
import './InputText.css'

const InputText = ({aoMudar, valor}) => {
    const digitou = (evento) => {
        aoMudar(evento.target.value)
    }
    return(
        <div className="input-text">
            <label>Criar tarefa</label><br/>
            <input
             placeholder="Digite a sua tarefa" 
             required={true} 
             onChange={digitou}
             value={valor}
             />
        </div>
    )
}

export default InputText