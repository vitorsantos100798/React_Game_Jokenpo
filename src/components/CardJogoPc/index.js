import React from "react";
import { useContext } from 'react';
import { MainContext } from '../../contexts/Context';
import "./CardJogoPc.css"
const CardJogoPc = () => {
  const { handlerLoopImage, handlerLoopImageTwo} = useContext(MainContext);
  

  return <div className="BoxJogo">
    <div class ="ContainerBoxImagePc">
      {handlerLoopImage()}
    </div>
    <div class="ContainerBoxImagePcTwo" >
      {handlerLoopImageTwo()}
    </div>
  </div>;
};

export default CardJogoPc;
