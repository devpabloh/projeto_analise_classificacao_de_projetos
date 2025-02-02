import React from 'react'
import InputMask from 'react-input-mask'

function InputPhone({onChange, value}){
    return(
        <InputMask
        mask="(99) 9 9999 9999" // Define a máscara desejada
        maskChar=""
        value={value}
        onChange={onChange}
        placeholder="(00) 0 0000 0000"
    >
        {(inputProps) => <input {...inputProps} type="tel" />}
        </InputMask>
    )
}

export default InputPhone