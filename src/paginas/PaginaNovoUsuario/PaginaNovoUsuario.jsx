import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { toast } from "react-toastify";
import ServicoUsuario from "../../comum/componentes/servicos/ServicoUsuario";
import { useNavigate } from "react-router-dom";

const PaginaNovoUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate =  useNavigate();


  const instanciaServicoUsuario = new ServicoUsuario();
  
  const cadastrar = () =>{
     if(!nome || !email || !senha){
        toast.error("Preencha todos os campos.")
        return 
     }

     const usuario = {
       nome,
       email,
       senha,
     }

     instanciaServicoUsuario.cadastrarUsuario(usuario);
     toast.success('Cadastro efetuado com sucesso.')
     navigate('/login')
  }

  return (
    <Principal titulo={"Novo Usuário"}>
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
        <label>Senha</label>
        <input
          type="password"
          placeholder="Informe uma senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        ></input>
      </div>

      <BotaoCustomizado cor={"secundaria"} onClick={() =>cadastrar()} >Cadastrar</BotaoCustomizado>
    </Principal>
  );
};

export default PaginaNovoUsuario;
