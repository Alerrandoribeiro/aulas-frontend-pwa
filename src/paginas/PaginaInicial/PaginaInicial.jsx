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
        <BotaoCustomizado cor={'secundaria'} onClick={() => alert("Clicou no botão.")}>
            Botão Secundário
        </BotaoCustomizado>
        <BotaoCustomizado onClick={() => alert("Clicou no botão.")}>
            Botão Padrão
        </BotaoCustomizado>

    </Principal>

}

export default PaginaInicial;