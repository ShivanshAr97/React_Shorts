import React, { createContext } from 'react'
import ContextExample2 from './ContextExample2';

const FirstName = createContext();
const LastName = createContext();

const ContextExample = () => {
    return (
        <>
            <FirstName.Provider value={"Abc"}>
                <LastName.Provider value={"Pqr"}>
                    <ContextExample2 />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextExample
export { FirstName, LastName };