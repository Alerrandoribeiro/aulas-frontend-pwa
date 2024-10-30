import { Link } from "react-router-dom";
import Principal from "../../../comum/componentes/Principal/Principal";
import ServicoCliente from "../../../comum/componentes/servicos/servicoCliente";

const PaginaListaClientes = () => {

    const servicoCliente = new ServicoCliente();
    const clientesDoLocalStorage = servicoCliente.listar();

  return( <Principal titulo="Lista de Clientes" voltarPara={"/"}>

 <Link to={'/lista-cadastro-clientes'}>Novo</Link>

  <pre>
    {JSON.stringify(clientesDoLocalStorage, null, 2)}
  </pre>
  </Principal>
  );
};

export default PaginaListaClientes;
