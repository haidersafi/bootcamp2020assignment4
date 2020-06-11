import React,{useState} from 'react';
import {Message} from './message';
import './App.css';
function App() {
  let [count,setCount]=useState(1);
  let [morning,setMorning]=useState(true);
  return (
    <div className={`App ${morning?'morning':'night'}`}>
   <Message count={count}/>
   <h2>Good {morning?'Morning':'Night'}</h2>
   <button onClick={()=>setMorning(!morning)}>Change Time!</button>
     <button onClick={()=>setCount(++count)}>Counter Variable!</button>
    </div>
  );
}

export default App;
