

function FormProjeto(){
    return(
    <form onSubmit={handleSubmit}>
        <h2>Criar novo projeto</h2>
        <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" />
        </div>
        
    </form>
    )
}

export default FormProjeto