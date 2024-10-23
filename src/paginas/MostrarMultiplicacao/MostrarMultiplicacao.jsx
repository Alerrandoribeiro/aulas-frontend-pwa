const MostrarMultiplicacao = ({ num1, num2 }) => {
    return (
        <>
            <div className="multiplicacao"> A multiplicação de {num1} * {num2} é: <strong>{multiplicacao(num1, num2)}</strong></div>
        </>
    );
}

function multiplicacao(n1, n2) {
    return Number(n1) * Number(n2);
}

export default MostrarMultiplicacao;