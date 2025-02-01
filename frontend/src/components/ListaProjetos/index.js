import { useEffect, useState } from "react"


function ListaProjetos(){
    // Aqui estou usando o useState para armazenar os projetos em um array
    const [projetos, setProjetos] = useState([])

    // useEffect para fazer a requisição para a rota /api/projetos
    useEffect(()=>{
        fetch("http://localhost:5000/api/projetos") // fazendo a requisição para a rota /api/projetos
        .then( response => response.json()) // convertendo a resposta para JSON
        .then(data => setProjetos(data)) // armazenando os dados no estado
        .catch(error => console.error(error)) // capturando erros
    }, []) // o array vazio significa que o useEffect só será executado uma vez, quando o componente for montado

    return(
        <div>
            <h2>Lista de Projetos</h2>
            {/* fazendo o map para percorrer o array de projetos e renderizar cada projeto */}
            {projetos.map(projeto =>( 
                <div>
                    <h3>{projeto.nome}</h3>
                    <p>{projeto.descricao}</p>
                    <p><strong>Fase:</strong> {projeto.fase}</p>
                </div>
            ))}
        </div>
    )

}

export default ListaProjetos