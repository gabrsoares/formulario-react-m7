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
      validateEmpty: {
        isEmpty: true
      }
    }

    
  }
  render(){
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
  
}

export default App;
