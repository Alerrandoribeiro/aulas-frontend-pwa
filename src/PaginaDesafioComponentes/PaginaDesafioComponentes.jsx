import { useNavigate } from "react-router-dom";
import Principal from "../comum/componentes/Principal/Principal";
import MostrarSoma from "./MostrarSoma/MostrarSoma ";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";
import MostrarDivisao from "./MostrarDivisao/MostrarDivisao";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto/MostrarMeuNomeCompleto";
import MostrarProduto from "./MostrarProduto/MostrarProduto";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";

const PaginaDesafioComponentes = () => {
    const navigate = useNavigate();
    return <Principal voltarPara={'/'}>

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

export default PaginaDesafioComponentes;