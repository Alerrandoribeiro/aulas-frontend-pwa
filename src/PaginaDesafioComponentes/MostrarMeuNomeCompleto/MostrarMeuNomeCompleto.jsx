const MostrarMeuNomeCompleto  = (props) => {
    
    const nome = props.nome
    const sobrenomeNome = props.sobreNome
      return (

   
          <>
              <div>O meu nome completo é: <strong>{nome} {sobrenomeNome}</strong></div>
          </>
      );
  
  }
  
  export default MostrarMeuNomeCompleto;