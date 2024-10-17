import { Link } from 'react-router-dom';
import './Principal.css'
import { FiArrowLeft } from "react-icons/fi"; // importando o ícone de voltar e chamado dentro do link

function Principal({voltarPara, titulo, children }) {
    return (<main className="principal_root">
        {voltarPara && <Link to={voltarPara}><FiArrowLeft color='' /></Link>} 
        <h1>{titulo}</h1>

        {children}

    </main>
    );
}


export default Principal;