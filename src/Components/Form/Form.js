import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade:'',
            cpf: '',
            civil: '',
            genero: '',
            isSubmitted: false,
            validateEmpty: {
                isEmpty: true
            }
        }
    }

    changeField(field, value) {
        this.setState({[field]: value}); //evita a criação de diversas funções para mudar o estado dos campos do formulário
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newState = {isSubmitted: true}
        if(this.state.nome.length !== 0 && this.state.idade.length !== 0 && this.state.cpf.length !==  0 && this.state.civil.length !== 0 && this.state.genero.length !== 0) { //checa se tudo foi preenchido
            newState.validateEmpty = {isEmpty: false} //atribuimos o valor do objeto no newState para evitar o uso repetido do useState em uma unica função
        }
        this.setState(newState)
        console.log("isEmpty:",this.state.validateEmpty.isEmpty)
        console.log("isSubmitted:",this.state.isSubmitted)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form">
                    <div className="loginInfo">
                        <div className="container name">
                            <label htmlFor="nome">Nome</label>
                            <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="text" placeholder="Digite seu nome" id="nome"/>
                        </div>
                        <div className="container idade">
                            <label htmlFor="idade">Idade</label>
                            <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="number" placeholder='Ex: 18' id="idade"/>
                        </div>
                        <div className="container civil">
                            <label htmlFor="civil">Estado Civil</label>
                            <select name="civil" id="civil" onChange={(event) => this.changeField(event.target.id, event.target.value)}>
                                <option value=""></option>
                                <option value="Solteiro(a)">Solteiro(a)</option>
                                <option value="Casado(a)">Casado(a)</option>
                                <option value="Viúvo(a)">Viúvo(a)</option>
                                <option value="Divorciado(a)">Divorciado(a)</option>
                            </select>
                        </div>
                        <div className="container cpf">
                            <label htmlFor="cpf">CPF</label>
                            <input maxLength={14} onChange={(event) => this.changeField(event.target.id, event.target.value)} type="text" placeholder='Digite seu CPF' id='cpf'/>
                        </div>
                    </div>
                    <div className='radio'>
                        <label>Gênero</label>
                        <div>
                            <input type="radio" name="genero" value="Masculino" option="Masculino" onChange={(event) => this.changeField(event.target.name, event.target.value)}/>
                            <label>Masculino</label>
                        </div>
                        <div>
                            <input type="radio" name="genero" value="Feminino" option="Feminino" onChange={(event) => this.changeField(event.target.name, event.target.value)}/>
                            <label>Feminino</label>
                        </div>
                        <div>
                            <input type="radio" name="genero" value="Outros" option="Outros" onChange={(event) => this.changeField(event.target.name, event.target.value)}/>
                            <label>Outros</label>
                        </div>
                    </div>
                    <div className="validation">
                        {this.state.validateEmpty.isEmpty && this.state.isSubmitted && <p>Preencha todos os campos!</p>}
                    </div>
                    <input type="submit" value="Cadastrar" id='cadButton'/>
                </div>
                <div className="results" style={{display:(!this.state.validateEmpty.isEmpty && this.state.isSubmitted)?"flex":"none"}}>
                    {(!this.state.validateEmpty.isEmpty && this.state.isSubmitted) && <>
                        <div className="container">
                            <p>Nome:</p>
                            <p>{this.state.nome}</p>
                        </div>
                        <div className="container">
                            <p>Idade:</p>
                            <p>{this.state.idade}</p>
                        </div>
                        <div className="container">
                            <p>Estado civil:</p>
                            <p>{this.state.civil}</p>
                        </div>
                        <div className="container">
                            <p>CPF:</p>
                            <p>{this.state.cpf}</p>
                        </div>
                        <div className="container">
                            <p>Gênero:</p>
                            <p>{this.state.genero}</p>
                        </div>
                    </>}
                </div>   
            </form>
        )
    }
}

export default Form
