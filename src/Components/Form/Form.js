import React from 'react'
import './Form.css'

const Form = ({setNameData,
    setAgeData,
    setCivilData,
    setCpfData,
    setGenreData,
    setIsSubmitted,
    setIsEmpty,
    isSubmitted,
    isEmpty}) => {
    
    const handleReset = () => {
        setIsSubmitted(false)
        setIsEmpty(true)
        setNameData('')
        setAgeData('')
        setCivilData('')
        setCpfData('')
        setGenreData('') 
    }

    const handleChange = (event) => {
        const {id, value} = event.target
        if(isSubmitted && !isEmpty){
            handleReset()
        }

        switch(id) {
            case "name":
                setNameData(value)
                break
            case "age":
                setAgeData(value)
                break
            case "civil":
                setCivilData(value)
                break
            case "cpf":
                setCpfData(value)
                break
            case "genre":
                setGenreData(value)
                break
            default:
                console.error("Erro")
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(true)

        const checkTarget = event.target
        if(checkTarget.name.value !== '' && //limpa os campos ao preencher todo o formulário
        checkTarget.age.value !== '' &&
        checkTarget.civil.value !== '' &&
        checkTarget.cpf.value !== '' &&
        checkTarget.genre.value !== ''
        ){  
            setIsEmpty(false)
            event.target.reset()
        } else {
            setIsEmpty(true)
        }
        console.log(`isEmpty: ${isEmpty} isSubmitted: ${isSubmitted}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="loginInfo">
                    <div className="container name">
                        <label htmlFor="name">Nome</label>
                        <input onChange={handleChange} type="text" placeholder="Digite seu nome" id="name"/>
                    </div>
                    <div className="container age">
                        <label htmlFor="idade">Idade</label>
                        <input onChange={handleChange} type="number" placeholder='Ex: 18' id="age"/>
                    </div>
                    <div className="container civil">
                        <label htmlFor="civil">Estado Civil</label>
                        <select onChange={handleChange} name="civil" id="civil">
                            <option value=""></option>
                            <option value="Solteiro(a)">Solteiro(a)</option>
                            <option value="Casado(a)">Casado(a)</option>
                            <option value="Viúvo(a)">Viúvo(a)</option>
                            <option value="Divorciado(a)">Divorciado(a)</option>
                        </select>
                    </div>
                    <div className="container cpf">
                        <label htmlFor="cpf">CPF</label>
                        <input maxLength={14} onChange={handleChange} type="text" placeholder='Digite seu CPF' id='cpf'/>
                    </div>
                </div>
                <div className='radio'>
                    <label>Gênero</label>
                    <div>
                        <input onChange={(event)=> setGenreData(event.target.value)} type="radio" name="genre" value="Masculino" option="Masculino"/>
                        <label>Masculino</label>
                    </div>
                    <div>
                        <input onChange={(event)=> setGenreData(event.target.value)} type="radio" name="genre" value="Feminino" option="Feminino"/>
                        <label>Feminino</label>
                    </div>
                    <div>
                        <input onChange={(event)=> setGenreData(event.target.value)} type="radio" name="genre" value="Outros" option="Outros"/>
                        <label>Outros</label>
                    </div>
                </div>
                <input type="submit" value="Cadastrar" id='cadButton'/>
            </div>
        </form>
    )
}

export default Form
