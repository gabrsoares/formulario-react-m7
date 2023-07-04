import './App.css';
import React from 'react';
import Form from './Components/Form/Form';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nome: '',
      idade:'',
      cpf: '',
      civil: '',
      genero: '',
      isSubmitted: false,
      isEmpty: true
    }
  }
  handleChange = (setChange) => {
    this.setState({
      nome: setChange.nome,
      idade:setChange.idade,
      cpf: setChange.cpf,
      civil: setChange.civil,
      genero: setChange.genero,
      isSubmitted: setChange.isSubmitted,
      isEmpty: setChange.isEmpty
    })
  }
  
  render(){
    return (
      <div className="App">
        <Form handleChange={this.handleChange} />
      </div>
    );
  }
  
}

export default App;
