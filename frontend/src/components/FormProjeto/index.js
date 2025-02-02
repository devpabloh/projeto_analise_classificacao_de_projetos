import { useState } from "react"

import ContainerInput from "../ContainerInput"
import ContainerSelect from "../ContainerSelect"
import InputPhone from "../InputPhone";


function FormProjeto(){
    const [ formData, setFormData] = useState({
        nome: "",
        descricao: "",
        fase: "",
    })

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const fases = [
        {value: "concepcao", label:"Concepção"},
        { value: "Desenvolvimento", label: "Desenvolvimento" },
        { value: "testes", label: 'Testes' },
        { value: "implementacao", label: 'Implementação' },
        { value: "manutencao", label: 'Manutenção' }
    ]

    return(
    <form>
        <fieldset>
            <legend>Informações Gerais do Projeto</legend>
            <fieldset>
                <legend>Cliente/Responsável</legend>
                <ContainerInput
                    inputType = "text"
                    textLabel="Quem é o cliente ou o responsável pelo projeto?"
                    labelfor="clientName"
                    inputId="clientName"
                    inputName="clientName"
                    onchange={handleChange}
                    required = "true"
                />
                <fieldset>
                    <legend>Informações para contato</legend>
                    <InputPhone
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    />
                    
                </fieldset>
            </fieldset>
            <fieldset>
                <legend>Informações do projeto</legend>
                <ContainerInput 
                    textLabel="Qual o nome do projeto?" 
                    labelfor="nameProjeto" 
                    inputId="nameProjeto" 
                    inputName="nameProjeto" 
                    onchange={handleChange} 
                    required = "true" />
                <ContainerInput textLabel="Qual é o objetivo ou escopo do projeto?" 
                    labelfor="projectObjective" 
                    inputId="projectObjective" 
                    inputName="projectObjective" 
                    onchange={handleChange} 
                    required = "true" />
                <ContainerInput 
                textLabel="Quais são os principais problemas a serem resolvidos ou entregas esperadas?" 
                labelfor="solveProblems" 
                inputId="solveProblems" 
                inputName="solveProblems" 
                onchange={handleChange} 
                required = "true" />
                <ContainerSelect 
                    selectFor={"fase"} 
                    selectID={"fase"} 
                    selectName={"fase"} 
                    selectLabel={"Qual é a fase do projeto?"}
                    options={fases}
                    onChange={handleChange} 
                    required = "true" />
            </fieldset>

            
        </fieldset>

        
        
    </form>
    )
}

export default FormProjeto