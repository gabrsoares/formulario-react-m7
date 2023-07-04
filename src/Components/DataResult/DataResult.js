import React from "react";

class DataResult extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
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
        )
    }
}

export default DataResult