import "./PaginaListaClientes.css";
import { Link, useNavigate } from "react-router-dom";
import Principal from "../../../comum/componentes/Principal/Principal";
import ServicoCliente from "../../../comum/componentes/servicos/ServicoCliente";
import { useEffect, useState } from "react";
import { FaFilePen } from "react-icons/fa6";

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
  const navigate = useNavigate();

  const [listaClientes, setlistaClientes] = useState([]);

  const navegarEdicao = (idCliente) => {
    navigate(`/lista-cadastro-clientes/${idCliente}`);
  };

  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setlistaClientes(clientesDoLocalStorage);
  }, []);

  return (
    <Principal titulo="Lista de Clientes" voltarPara={"/"}>
      <Link to={"/lista-cadastro-clientes"}>Novo</Link>
      {listaClientes.map((cliente) => {
        return (
          <div key={cliente.id} className="pagina-lista-clientes_item-cliente">
            {cliente.nome}
            <FaFilePen
              size={24}
              color="green"
              onClick={() => {
                navegarEdicao(cliente.id);
              }}
            />
          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaListaClientes;
