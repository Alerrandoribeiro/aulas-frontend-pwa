const MostrarSoma  = ({ num1, num2 }) => {
    return (
        <>
            <div className="soma">A soma de {num1} + {num2} é: <strong>{soma(num1, num2)}</strong></div>
        </>

        
    );
}

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}



export default MostrarSoma;