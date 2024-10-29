import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaCadastroClientes.css";

const PaginaCadastroClientes = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const salvar = () => {
    const novoCliente = {
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
  };

  return (
    <Principal titulo={"Novo de Cliente"} voltarPara={"/lista-clientes"}>
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
            setCelular(e.target.value);
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
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        ></input>
      </div>

      <BotaoCustomizado cor={"secundaria"} onClick={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;
