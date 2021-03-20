import React, { useEffect, useState } from "react";
import style from './styles.module.css';

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
      <div className={style.clock}>
        <div
          className={style.hour_hand}
          style={{
            transform: `rotateZ(${state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className={style.min_hand}
          style={{
            transform: `rotateZ(${state.time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className={style.sec_hand}
          style={{
            transform: `rotateZ(${state.time.getSeconds() * 6}deg)`
          }}
        />
        <span className={style.twelve}>12</span>
        <span className={style.one}>1</span>
        <span className={style.two}>2</span>
        <span className={style.three}>3</span>
        <span className={style.four}>4</span>
        <span className={style.five}>5</span>
        <span className={style.six}>6</span>
        <span className={style.seven}>7</span>
        <span className={style.eight}>8</span>
        <span className={style.nine}>9</span>
        <span className={style.ten}>10</span>
        <span className={style.eleven}>11</span>
      </div>
    );
  }

export default AnalogClock;