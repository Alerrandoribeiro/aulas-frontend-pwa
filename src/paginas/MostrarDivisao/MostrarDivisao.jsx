const MostrarDivisao = ({ num1, num2 }) => {
    return (
        <>
            <div className="divisao"> A divisão de {num1} / {num2} é: <strong>{divisao(num1, num2)}</strong></div>
        </>
    );
}

function divisao(n1, n2) {
    return Number(n1) / Number(n2);
}

export default MostrarDivisao;