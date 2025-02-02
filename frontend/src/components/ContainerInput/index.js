import styles from "./ContainerInput.module.css"

function ContainerInput({textLabel, labelfor, inputId, inputType = "text", inputName, inputValue, onchange, required = false}){
    return(
        <div className={styles.containerInput}>
            <label htmlFor={labelfor}>{textLabel}</label>
            <input type={inputType} id={inputId} name={inputName} value={inputValue} onChange={onchange} required={required} />
        </div>
    )
}

export default ContainerInput