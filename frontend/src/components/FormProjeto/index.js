
import { useState } from "react"

import ContainerInput from "../ContainerInput"



function FormProjeto(){
    const [ formData, setFormData] = useState({
        nome: "",
        descricao: "",
        fase: "",

    })

    const handlechange = (event)=>{
        const {name, value, type, checked} = event.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    return(
    <form>
        <fieldset>
            <legend>Informações Gerais do Projeto</legend>
            <fieldset>
                <legend>Informações do projeto</legend>
                <ContainerInput textLabel="Qual o nome do projeto?" labelfor="nameProjeto" inputId="nameProjeto" inputName="nameProjeto" onchange={handlechange} required = "true" />
                <ContainerInput textLabel="Qual é o objetivo ou escopo do projeto?" labelfor="projectObjective" inputId="projectObjective" inputName="projectObjective" onchange={handlechange} required = "true" />
                <ContainerInput textLabel="Quais são os principais problemas a serem resolvidos ou entregas esperadas?" labelfor="solveProblems" inputId="solveProblems" inputName="solveProblems" onchange={handlechange} required = "true" />
                <ContainerInput textLabel="Qual é a fase do projeto?" labelfor="projectPhase" inputId="projectPhase" inputName="projectPhase" onchange={handlechange} required = "true" />
            </fieldset>

            
        </fieldset>

        
        
    </form>
    )
}

export default FormProjeto