import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css'

function Principal() {
    return <main className="principal_root">
        Principal

        <BotaoCustomizado cor={'primaria'} onClick={() => alert("Clicou no botão.")}>
            Botão Primário
        </BotaoCustomizado>
        <BotaoCustomizado cor={'secundaria'} onClick={() => alert("Clicou no botão.")}>
            Botão Secundário
        </BotaoCustomizado>
        <BotaoCustomizado onClick={() => alert("Clicou no botão.")}>
            Botão Padrão
        </BotaoCustomizado>

    </main>
}

export default Principal;