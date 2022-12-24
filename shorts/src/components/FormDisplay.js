import React, { useState } from 'react'

const FormDisplay = () => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    const inputField = (event)=>{
        setName(event.target.value)
    }
    const inputField2 = (event)=>{
        setLastName(event.target.value)
    }
    const onSubmits=(e)=>{
        e.preventDefault();
        setFullName(name+" " +lastname)
    }
  return (
    <>
    <h1>Hello {fullName}</h1>
    <form onSubmit={onSubmits}>
    <input onChange={inputField} value={name} type="text" placeholder='Enter your name' name="" id="" />
    <br />
    <input onChange={inputField2} value={lastname} type="text" placeholder='Enter your name' name="" id="" />
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default FormDisplay