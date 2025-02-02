

function ContainerInput({textLabel, labelfor, inputId, inputType = "text", inputName, inputValue, onchange, required = false}){
    return(
        <div>
            <label htmlFor={labelfor}>{textLabel}</label>
            <input type={inputType} id={inputId} name={inputName} value={inputValue} onChange={onchange} required={required} />
        </div>
    )
}

export default ContainerInput