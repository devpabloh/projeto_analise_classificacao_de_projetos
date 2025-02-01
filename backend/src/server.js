
const express = require('express') // importando o express, framework para criar a api
const mongoose = require('mongoose') // importando o mongoose, para conectar o banco de dados
const cors = require('cors') // importando o cors, para permitir a comunicação entre os servidores express 
const dotenv = require('dotenv')

const app = express() // criando a api

const PORT = process.env.PORT || 5000

// middleware para CORS, doteenv e JSON
app.use(cors()) 
app.use(express.json())
dotenv.config()

// Conectando com o MongoDB
mongoose.connect('mongodb://localhost:27017/')
    .then(() => { console.log('Conectado ao MongoDB') })
    .catch((error) => { console.error(`Erro ao conectar ao MongoDB: ${error}`) });

// definindo o schema e model para o projeto
const projectSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    fase: String,
    testes: {
        realizado: Boolean,
        tipos: [String],
        detalhes: String,
    },
    ambientes: {
        desenvolvimento: Boolean,
        homologacao: Boolean,
        producao: Boolean
    },
    documentacao: {
        tecnica: Boolean,
        funcional: Boolean,
        url: String
    },
    equipe: {
        responsavel: String,
        contato: String
    },
    seguranca: {
        medidas: [String],
        conformidade: Boolean
    },
    outros: {
        integracoes: [String],
        observacoes: String
    }
},{timestamps: true}) //timestamp cria o campo de data e hora

const Projeto = mongoose.model('Projeto', projectSchema) //criando o modelo para o projeto, baseado no schema criado no passo anterior

// Rotas do CRUD (criação de novo projeto, leitura de todos os projetos, leitura de um projeto especifico )

// Rota para criação de um novo projeto
app.post('/api/projetos', async(request, response) =>{
    try{
        const projeto = new Projeto(request.body); //criando o projeto, baseado no schema criado no passo anterior
        await projeto.save() // salvando o projeto no banco de dados
        response.status(201).json(projeto) //retornando o projeto criado
    }catch(error){
        response.status(400).json({error: error.message}) // retornando o erro
    }
})

// Rota para leitura de todos os projetos
app.get('/api/projetos', async(request, response)=>{
    try {
        const projetos = await Projeto.find() // buscando todos os projetos no banco de dados
        response.json(projetos) // retornando os projetos encontrados
    } catch (error) {
        response.status(500).json({error: error.message})
    }
})

// Rota para leitura de um projeto especifico
app.get('/api/projetos/:id', async( request, response)=>{
    try {
        const projeto = await Projeto.findById(request.params.id) // buscando o projeto pelo id
        // verificando se o projeto foi encontrado, se não, retorna um erro
        if (!projeto){ 
            return response.status(404).json({error: 'Projeto não encontrado!'}) // retornando o erro
        }
        response.json(projeto) // retornando o projeto encontrado
    } catch (error) {
        response.status(500).json({error: error.message}) // retornando o erro
    }
})

// Rota para atualização de um projeto
app.put('/api/projetos/:id', async(request, response)=>{
    try {
        const projeto = await Projeto.findByIdAndUpdate(request.params.id, request.body, {new: true})
        if(!projeto){
            return response.status(404).json({error: 'Projeto não encontrado!'})
        }
        response.json(projeto)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
})

// Rota para exclusão de um projeto
app.delete('/api/projetos/:id', async(request, response)=>{
    try {
        const projeto = await Projeto.findByIdAndDelete(request.params.id)
        if(!projeto){
            return response.status(404).json({error: 'Projeto não encontrado!'})
        }
        response.json({message: 'Projeto removido com sucesso!'})
    } catch (error) {
        response.status(500).json({error: error.message})
    }
})

// Inicializando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})