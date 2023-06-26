import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            age:'',
            cpf: '',
            civil: ''
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
                <div className="form">
                    <div className="loginInfo">
                        <div className="container name">
                            <label htmlFor="username">Nome</label>
                            <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="text" placeholder="Digite seu nome" id="username"/>
                        </div>
                        <div className="container age">
                            <label htmlFor="age">Idade</label>
                            <input onChange={(event)=> this.changeField(event.target.id, event.target.value)} type="number" placeholder='Ex: 18' id="age"/>
                        </div>
                        <div className="container civil">
                            <label htmlFor="civil">Estado Civil</label>
                            <select name="civil" id="civil">
                                <option value="Solteiro(a)">Solteiro(a)</option>
                                <option value="Casado(a)">Casado(a)</option>
                                <option value="Viúvo(a)">Viúvo(a)</option>
                                <option value="Divorciado(a)">Divorciado(a)</option>
                            </select>
                        </div>
                        <div className="container cpf">
                            <label htmlFor="cpf">CPF</label>
                            <input onChange={(event) => this.changeField(event.target.id, event.target.value)} type="text" placeholder='Digite seu CPF' id='cpf'/>
                        </div>
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
                    <div className="validation">
                        
                    </div>
                    <input type="submit" value="Cadastrar" id='cadButton'/>
                </div>
                <div className="results">
                    
                </div>
            </form>
        )
    }
}

export default Form
