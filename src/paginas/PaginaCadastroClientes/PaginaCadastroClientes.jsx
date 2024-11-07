import { useEffect, useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaCadastroClientes.css";

import { useNavigate, useParams } from "react-router-dom";
import {
  MASCARA_CELULAR,
  MASCARA_CPF,
  formatarComMascara,
} from "../../comum/componentes/utils/mascara";
import ServicoCliente from "../../comum/componentes/servicos/servicoCliente";

import { toast } from "react-toastify";

const instanciaSevicoCliente = new ServicoCliente();

const PaginaCadastroClientes = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (params.id) {
      const clienteEncontrado = instanciaSevicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {

    if(!nome || email){
    toast('Preencha todos os campos obrigatórios.')
    }

    const cliente = {
      id: params.id ? +params.id : Date.now(),
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };

    if (params.id) {
      instanciaSevicoCliente.editarCliente(cliente);
    } else {
      instanciaSevicoCliente.cadastrarCliente(cliente);
    }

    navigate("/lista-clientes");
  };

  

  return (
    <Principal
      titulo={params.id ? "Editar de Cliente" : "Novo Cliente"}
      voltarPara={"/lista-clientes"}
    >
      {params.id && (
        <div className="campo">
          <label>id</label>
          <input type="text" value={params.id} disabled></input>
        </div>
      )}

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
      </div>

      <div className="campo">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Informe seu número de telefone"
          value={celular}
          onChange={(e) => {
            setCelular(formatarComMascara(e.target.value, MASCARA_CELULAR));
          }}
        ></input>
      </div>

      <div className="campo">
        <label>Data de Nascimento</label>
        <input
          type="date"
          placeholder="Informe sua data de nascimento"
          value={dataNascimento}
          onChange={(e) => {
            setDataNascimento(e.target.value);
          }}
        ></input>
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Informe seu cpf"
          value={cpf}
          onChange={(e) =>
            setCpf(formatarComMascara(e.target.value, MASCARA_CPF))
          }
        ></input>
      </div>

      <BotaoCustomizado cor={"secundaria"} onClick={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;
