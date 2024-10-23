import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css'
import MostrarSoma from './MostrarSoma/MostrarSoma ';
import MostrarSubtracao from '../MostrarSubtracao/MostrarSubtracao';
import MostrarDivisao from '../MostrarDivisao/MostrarDivisao';
import MostrarMultiplicacao from '../MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarMeuNomeCompleto from '../MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import ListaProdutos from './ListasProdutos/ListaProdutos';
import MostrarProduto from '../MostrarProduto/MostrarProduto';
import MostrarNumerosPares from '../MostrarNumerosPares/MostrarNumerosPares';

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
        <BotaoCustomizado cor={'secundaria'} onClick={() => navigate('/lista-tarefa')}>
            Desafio componentes 
        </BotaoCustomizado>
    
      <span>
      <MostrarSoma num1={11} num2={12} />
      </span>
       
      <span>
      <MostrarSubtracao num1={10} num2={2} />
      </span>

      <span>
      <MostrarDivisao num1={50} num2={10} />
      </span>

      <span>
      <MostrarMultiplicacao num1={10} num2={10} />
      </span>
       
      <span>
       <MostrarMeuNomeCompleto nome ='Glauberty Alerrando' sobreNome = 'Chagas Ribeiro' />
      </span>
      <span>
      <MostrarProduto/>

      </span>
      
      <span>

      <MostrarNumerosPares/>
      </span>
       

    </Principal>

}

export default PaginaInicial;