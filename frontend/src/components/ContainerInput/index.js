import styles from "./ContainerInput.module.css"

function ContainerInput({textLabel, labelfor, inputId, inputType, inputName, inputValue, onChange, required = false, inputMask, inputMaskChar}){
    return(
        <div className={styles.containerInput}>
            <label htmlFor={labelfor}>{textLabel}</label>
            <input mask={inputMask} maskChar={inputMaskChar} type={inputType} id={inputId} name={inputName} value={inputValue} onChange={onChange} required={required} />
        </div>
    )
}

export default ContainerInput