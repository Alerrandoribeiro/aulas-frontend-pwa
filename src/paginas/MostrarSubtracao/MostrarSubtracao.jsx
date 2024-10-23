const MostrarSubtracao  = ({ num1, num2 }) => {
    return (
        <>
            <div className="subtracao">A subtração de {num1} - {num2} é: <strong>{subtracao(num1, num2)}</strong></div>
        </>
    );
}

function subtracao(n1, n2) {
    return Number(n1) - Number(n2);
}

export default MostrarSubtracao;