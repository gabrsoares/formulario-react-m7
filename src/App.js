import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form'
import DataResult from './Components/DataResult/DataResult';

function App() {

  const [nameData, setNameData] = useState('');
  const [ageData, setAgeData] = useState('');
  const [civilData, setCivilData] = useState('');
  const [cpfData, setCpfData] = useState('');
  const [genreData, setGenreData] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <div className="App">
      <Form setNameData={setNameData} setAgeData={setAgeData} setCivilData={setCivilData}
      setCpfData={setCpfData} setGenreData={setGenreData} setIsSubmitted={setIsSubmitted}
      setIsEmpty={setIsEmpty} isSubmitted={isSubmitted} isEmpty={isEmpty}
      />
      <DataResult nameData={nameData} ageData={ageData} civilData={civilData} cpfData={cpfData}
      genreData={genreData} isSubmitted={isSubmitted} isEmpty={isEmpty}/>
    </div>
  );
}

export default App;
