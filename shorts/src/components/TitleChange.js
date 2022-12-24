import React, { useState, useEffect } from 'react'

const TitleChange = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        document.title=`${num} times clicked`
    })
    
    const click = () => {
        setNum(num + 1);
    }

    return (
        <>
            <button onClick={click}>Click {num}</button>
        </>
    )
}

export default TitleChange