import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { Link, useNavigate } from "react-router-dom";
import ServicoAutenticacao from "../../comum/componentes/servicos/ServicoAutenticacao";
import { toast } from "react-toastify";

const instanciaServicoAutenticacao =  new ServicoAutenticacao();

const PaginaLogin = () =>{

    const navigate =  useNavigate();
   
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    const entrar = () =>{
        if(!email || !senha){
           toast.error("Preencha todos os campos.")
           return 
        }

      const usuarioLogado =  instanciaServicoAutenticacao.login(email, senha);
      if(usuarioLogado){
       navigate('/')
    }else{
        toast.error('Usuário ou senha inválida.')
    }
    }
   

 return  <Principal>
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
      <BotaoCustomizado cor={"secundaria"} onClick={() =>entrar()} >Cadastrar</BotaoCustomizado>
    <Link to='/novo-usuario' >Ainda não tem conta?</Link>
    </Principal>
}

export default PaginaLogin;