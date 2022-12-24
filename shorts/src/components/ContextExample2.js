import React, {useContext} from 'react'
import { FirstName, LastName } from './ContextExample'
 
const ContextExample2 = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
  return (
    <>
    <h1>My name is {fname} {lname}</h1>
    </>
  )
}

export default ContextExample2