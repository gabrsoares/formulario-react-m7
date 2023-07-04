import React from 'react'
import './Form.css'

class Form extends React.Component {
    changeField = (field, value) => {
        const { handleChange } = this.props
        const setChange = { //evita a criação de diversas funções para mudar o estado dos campos do formulário
            [field]: value
        }; 

        handleChange(setChange)
        console.log(this.props)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { handleChange } = this.props
        const { nome, idade, cpf, civil, genero } = this.props
            
        const isEmpty =
            nome.length === 0 ||
            idade.length === 0 ||
            cpf.length === 0 ||
            civil.length === 0 ||
            genero.length === 0;

        handleChange({ isSubmitted: true, isEmpty})
        console.log("isEmpty:", isEmpty)
        console.log("isSubmitted:", this.props.isSubmitted)
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
                    {/* <div className="validation">
                        {this.state.validateEmpty.isEmpty && this.state.isSubmitted && <p>Preencha todos os campos!</p>}
                    </div> */}
                    <input type="submit" value="Cadastrar" id='cadButton'/>
                </div>
            </form>
        )
    }
}

export default Form
