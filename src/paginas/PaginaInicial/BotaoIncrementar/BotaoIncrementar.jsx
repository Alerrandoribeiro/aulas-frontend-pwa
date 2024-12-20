import { useState } from "react"
import BotaoCustomizado from "../../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../../comum/componentes/Principal/Principal";

const BotaoIncrementar = () => {

    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1)
    }

    return <Principal titulo={'Botão Contador'} voltarPara={'/'}>

        Botão Contador
        <br>
        </br>
        <BotaoCustomizado onClick={incrementar} cor={'primaria'}>
            {numero}
        </BotaoCustomizado>
    </Principal>


}

export default BotaoIncrementar;