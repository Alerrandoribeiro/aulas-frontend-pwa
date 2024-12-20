import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css'

const PaginaInicial = () => {

   const navigate = useNavigate();

    return <Principal titulo="Página Inicial">

        <BotaoCustomizado cor={'primaria'} onClick={() => navigate('/lista-produtos')}>
           Lista Produtos
        </BotaoCustomizado>
        <BotaoCustomizado cor={'secundaria'} onClick={() => navigate('/botao-incrementar')}>
            Botão Incrementar
        </BotaoCustomizado>
        <BotaoCustomizado onClick={() => navigate('/botao-incrementar-decrementar')}>
            Botão Incremetar e Decrementar
        </BotaoCustomizado>
        <BotaoCustomizado cor={'primaria'} onClick={() => navigate('/lista-tarefa')}>
            Lista de Tarefas
        </BotaoCustomizado>
        <BotaoCustomizado cor={'secundaria'} onClick={() => navigate('/pagina-desafio-componentes')}>
            Desafio componentes 
        </BotaoCustomizado>
        <BotaoCustomizado cor={'primaria'} onClick={() => navigate('/lista-clientes')}>
            Lista de Clientes
        </BotaoCustomizado>
    
        <BotaoCustomizado cor={'secundaria'} onClick={() => navigate('/lista-cadastro-clientes')}>
            Cadastro de Clientes
        </BotaoCustomizado>
    


    </Principal>

}

export default PaginaInicial;