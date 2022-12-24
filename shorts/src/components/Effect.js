import React, { useState, useEffect } from 'react'

const Effect = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(() => {
      alert("Clicked")
    }, [num1])
    
    const click1=()=>{
        setNum1(num1+1)
    }
    const click2=()=>{
        setNum2(num2+1)
    }
  return (
    <>
    <button onClick={click1}>Click {num1}</button>
    <button onClick={click2}>Click {num2}</button>
    </>
  )
}

export default Effect