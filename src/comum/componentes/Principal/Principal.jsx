import { Link } from 'react-router-dom';
import './Principal.css'

function Principal({voltarPara, titulo, children }) {
    return (<main className="principal_root">
        {voltarPara && <Link to={voltarPara}>{'Voltar'}</Link>}
        <h1>{titulo}</h1>

        {children}

    </main>
    );
}


export default Principal;