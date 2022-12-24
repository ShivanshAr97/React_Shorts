import React, {useState} from 'react'

const TimeOnClick = () => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    const [date, setDate] = useState(time);
  
    const TellTime=()=>{
      d = new Date();
      time = d.toLocaleTimeString();
      setDate(time);
      // console.log("clicked "+time);
    }
    return (
      <>
      <h1>{date}</h1>
      <button onClick={TellTime}>Click me</button>
      </>
    );
}

export default TimeOnClick