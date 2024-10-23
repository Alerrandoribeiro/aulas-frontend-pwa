const MostrarNumerosPares = () => {
    const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];
    const numeros_pares = numeros.filter(numero => numero % 2 == 0);

    return (
        <>
            <div className='numerosPares'>
                <ul>
                    {numeros_pares.map((pares, index) => (
                        <li key={index}>{pares}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MostrarNumerosPares;