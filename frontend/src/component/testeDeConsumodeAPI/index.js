

export const testeDeConsumodeAPI = () => {



    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>Teste de consumo de API</h1>
            <input type="text" placeholder="Digite o nome do projeto" onChange={handleChange} />
        </div>
    );
};

