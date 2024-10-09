import './BotaoCustomizado.css'

const BotaoCustomizado = ({ cor, onClick, children }) => {

    const estilos = ['botao-customizado_root'];

    switch (cor) {
        case 'primaria':
            estilos.push('botao-customizado_primario');
            break;
        case 'secundaria':
            estilos.push('botao-customizado_secundario');
            break;

        default:
            estilos.push('botao-customizado_padrao');
            break;
    }

    return <button className={estilos.join(" ")} onClick={onClick}>{children}</button>
}


export default BotaoCustomizado;