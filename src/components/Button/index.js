import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../contexts/Context';
import "./button.css";

const ButtonGame = ()=> {
  const {
    setImageLoop,
    setImageLoopTwo, 
    setRoundCount,
    random,
    randomTwo
  } = useContext(MainContext);
  
  const HandlerRandomNumbers = ()=> {
    return setImageLoop(random(0,3)), 
    setImageLoopTwo(randomTwo(0,3)),
    setRoundCount(prev=> prev + 1)
  }
  return (
    <button onClick={()=> HandlerRandomNumbers() }>GAME</button>
  )
}

export default ButtonGame;
