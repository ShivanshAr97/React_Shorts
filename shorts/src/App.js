import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forms from './components/Forms';
// import Events from './components/Events';
// import TimeClock from './components/TimeClock';
// import TimeOnClick from './components/TimeOnClick';

function App() {
  return(
  <>
        <Routes>
        <Route path='/' element={<Forms />} />
      </Routes>
  {/* <Forms/> */}
  {/* <Events/> */}
  {/* <TimeOnClick/>
  <TimeClock/> */}
  </>
  )
}

export default App;
