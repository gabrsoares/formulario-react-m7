import React from 'react'
import './DataResult.css'

const  DataResult = ({nameData, ageData, civilData, cpfData, genreData, isSubmitted, isEmpty}) => {
  return (
    isEmpty && isSubmitted? <p className='error'>Preencha todos os campos!</p> : !isSubmitted? "" : 
    <div className='results'>
        <div className='container'>
            <p>Nome:</p>
            <p>{nameData}</p>
        </div>
        <div className='container'>
            <p>Idade:</p>
            <p>{ageData}</p>
        </div>
        <div className='container'>
            <p>Estado Civil:</p>
            <p>{civilData}</p>
        </div>
        <div className='container'>
            <p>CPF:</p>
            <p>{cpfData}</p>
        </div>
        <div className='container'>
            <p>Gênero:</p>
            <p>{genreData}</p>
        </div>
    </div>
    
  )
}

export default DataResult