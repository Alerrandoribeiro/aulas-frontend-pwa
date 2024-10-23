const MostrarProduto = () => {
    const produto = {
        nome: 'TV Samsung 55"',
        preco: 2999.90,
        estoque: 345,
    };

    return (
        <div>
            <strong><h4>Produto:</h4></strong>
            <strong>Nome:</strong> {produto.nome} <br/>
            <strong>Preço:</strong> R$ {produto.preco.toFixed(2)} <br/>
            <strong>Qtd Estoque:</strong> {produto.estoque}
        </div>
    );
}

export default MostrarProduto;
