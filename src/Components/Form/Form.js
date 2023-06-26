import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password:''
        }
    }

    changeField(field, value) {
        this.setState({[field]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviado!")
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="loginInfo">
                    <label htmlFor="username">Nome</label>
                    <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="text" placeholder="Digite seu nome" id="username"/>
                    <label htmlFor="password">Senha</label>
                    <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="password" placeholder="Digite sua senha" id="password" />
                </div>
                <div className='radio'>
                    <label>Gênero</label>
                    <div>
                        <input type="radio" name="gender" value="Masculino" option="Masculino"/>
                        <label>Masculino</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" value="Feminino" option="Feminino"/>
                        <label>Feminino</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" value="Outros" option="Outros"/>
                        <label>Outros</label>
                    </div>
                </div>
                <input type="submit" value="Cadastrar"/>
            </form>
        )
    }
}

export default Form
