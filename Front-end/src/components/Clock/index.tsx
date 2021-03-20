import React, { useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
interface IState{
    time: Date;
}

const AnalogClock = (props:any) =>{

  const [state, setState] = useState<IState>({time:new Date() });


  useEffect(()=>{
    setInterval(() => {
        setState({
          time: new Date()
        });
      }, 1000);
  },[])

    return (
      <Clock value={state.time}></Clock>)
  }

export default AnalogClock;