import React, { useState } from 'react'

const TimeClock = () => {
    let date= new Date();
    let tim = date.toLocaleTimeString();
    const [time, setTime] = useState(tim)
    setInterval(() => {
        let date= new Date();
    let tim = date.toLocaleTimeString();
    setTime(tim)
    }, 1000);
    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default TimeClock