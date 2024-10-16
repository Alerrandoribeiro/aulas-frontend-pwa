import { useState } from "react"
import BotaoCustomizado from "../../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../../comum/componentes/Principal/Principal";

const BotaoIncrementarDecrementar = () => {

    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1)
    }
    const decrementar = () => {
        setNumero(numero - 1)
    }

    return <Principal titulo={'Botão incrementar e decrementar'} voltarPara={'/'}>
        <BotaoCustomizado onClick={decrementar} cor={'primaria'}>
        -1
        </BotaoCustomizado>
        <h1>{numero}</h1>
        <BotaoCustomizado onClick={incrementar} cor={'secundaria'}>
        +1
        </BotaoCustomizado>
    </Principal>


}

export default BotaoIncrementarDecrementar;