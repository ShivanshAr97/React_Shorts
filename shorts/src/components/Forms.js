import React, { useState } from 'react'

const Forms = () => {
    const [name, setName] = useState('')
    const [fullName, setFullName] = useState('')
    const inputField = (event)=>{
        setName(event.target.value)
    }
    const onSubmit=()=>{
        setFullName(name)
    }
  return (
    <>
    <h1>Hello {fullName}</h1>
    <input onChange={inputField} value={name} type="text" placeholder='Enter your name' name="" id="" />
    <button onClick={onSubmit}>Submit</button>
    </>
  )
}

export default Forms