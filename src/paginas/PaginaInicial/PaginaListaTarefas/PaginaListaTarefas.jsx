import { useState } from "react";
import Principal from "../../../comum/componentes/Principal/Principal";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import './PaginaListaTarefas.css'

const PaginaListaTarefas = () => {
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarNaLista = () => {
        if(descricao.trim() && descricao){
        setTarefas([...tarefas, descricao])
        setDescricao('')
    }else{
        alert('Digite uma descrição!')
        setDescricao('')
        
    }
        
    }

    const removerDaLista = (index) =>{

        tarefas.splice(index, 1)
        setTarefas([...tarefas])

    }

    return <Principal titulo={'Lista de Tarefas'} voltarPara={'/'}>

        <div className="icon" >
            <input type="text" placeholder="Adicionar item..."  value={descricao}  onChange={(event) => setDescricao(event.target.value)}
            onKeyUp={(event) =>{
                if(event.key === 'Enter'){  // colocando o dicionar ao clicar no Enter
                    adicionarNaLista();
                    setDescricao('') 
                }
            }} 
            /> <IoAddSharp onClick={adicionarNaLista} size={30} color="red"  />
           
        </div>

        <ul>

            {tarefas.map((item, index) => {

                return <li key={index}> {item} <FaRegTrashCan className="remover-item_lista" size={14}  color="red" onClick={ () => removerDaLista(index)}/></li>

            })}

        </ul>

    </Principal>
}

export default PaginaListaTarefas;