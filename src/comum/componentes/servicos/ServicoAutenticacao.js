import ServicoUsuario from "./ServicoUsuario";

const instanciaServicoUsuarios = new ServicoUsuario;


class ServicoAutenticacao{
   
    login(email, senha){

        const usuariosDoLocalStorage = instanciaServicoUsuarios.listar();
       
        const usuarioLogado = usuariosDoLocalStorage.find(u => u.email === email && u.senha === senha);

        if(usuarioLogado){
            localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado))
        }
        return usuarioLogado;
    }

    usuarioEstaLogado(){
      const usuarioEstaLogado = localStorage.getItem('usuario-logado');
      if(usuarioEstaLogado){
        return true;
      }
      return false;
    }
}

export default ServicoAutenticacao;