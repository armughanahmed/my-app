import React ,{useState} from 'react';
import './App.css';
import Dinner from './dinner'
function App() {
  let [count,setCount]=useState(1);
  let [IsMorning,SetMorning]=useState(true);
  return (
    <div className={`box ${IsMorning ? 'Morning' : ''}`}>
      <Dinner firstName="Armughan" surName="Ahmed" />
      <hr/>
      <Dinner firstName="Farhan" surName="Fahim" />
      <hr/>
      <h3>Count Value: {count} </h3>
      <button onClick={()=>{
        setCount(++count)
      }}>Update Count!</button>
      <hr/>
      <button onClick={()=>{
        setCount(1)
      }}>Reset Count!</button>
      <hr/>
      <button onClick={()=>{
        SetMorning(true)
      }}>Morning</button>
      <hr/>
      <button onClick={()=>{
        SetMorning(false)
      }}>Night</button>
    </div>
  );
}
export default App;