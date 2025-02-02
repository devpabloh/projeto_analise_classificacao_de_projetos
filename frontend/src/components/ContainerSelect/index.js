import styles from "./ContainerSelect.module.css"

function ContainerSelect({selectFor,selectLabel, selectID, selectName, onChange, required = false, options}){
    return(
        <div className={styles.containerSelect}>
            <label htmlFor={selectFor}>{selectLabel}</label>
            <select id={selectID} name={selectName} onChange={onChange} required={required}>
                <option value="">Selecione uma opção</option>
                {options.map((option, index)=>(
                    <option key={index} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
        </div>
    )
}

export default ContainerSelect