import React, { useState } from 'react'

const Events = () => {
    const [s1, setS1] = useState("Click Me");
    const [styled, setStyled] = useState({backgroundColor:"blue"});
    const clicker=()=>{
        setS1("Hey, you clicked me 😡")
        setStyled({backgroundColor:"red"})
    }
    const clickers=()=>{
        setS1("Lol 😂")
        setStyled({backgroundColor:"pink"})
    }
  return (
    <>
    {/* <h1 onMouseEnter={clicker} onMouseLeave={clickers} style={styled}>{s1}</h1> */}
    <h1 onClick={clicker} onDoubleClick={clickers} style={styled}>{s1}</h1>
    </>
  )
}

export default Events