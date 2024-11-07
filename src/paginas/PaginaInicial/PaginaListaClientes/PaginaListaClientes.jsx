import "./PaginaListaClientes.css";
import { Link, useNavigate } from "react-router-dom";
import Principal from "../../../comum/componentes/Principal/Principal";

import { useEffect, useState } from "react";
import { FaFilePen, FaTrash } from "react-icons/fa6";
import ServicoCliente from "../../../comum/componentes/servicos/servicoCliente";

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
  const navigate = useNavigate();

  const [listaClientes, setlistaClientes] = useState([]);

  const navegarEdicao = (idCliente) => {
    navigate(`/lista-cadastro-clientes/${idCliente}`);
  };

  const excluir = (idCliente) =>{
    if(confirm('Tem certeza!')){
      instanciaServicoCliente.excluirCliente(idCliente)
    };
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
             <div><FaFilePen
              size={24}
              color="green"
              onClick={() => {
                navegarEdicao(cliente.id);
              }}
            />
            <FaTrash className="pagina-lista-clientes_item-cliente-acoes"
            size={24}
            color="red"
            onClick={() => excluir(cliente.id)}
            />
            </div> 
          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaListaClientes;
