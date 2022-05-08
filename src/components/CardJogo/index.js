import React from "react";
import Pedra from "../../assets/Pedra.png";
import Papel from "../../assets/Papel.png";
import Tesoura from "../../assets/Tesoura.png";
import { useContext } from 'react';
import { MainContext } from '../../contexts/Context'
import "./cardjogo.css";

const CardJogo = () => {
  const {  select,setSelect } = useContext(MainContext)
  return (
    <>
      <div className="BoxJogo">
        <div className="ContainerImageGame">
          <img className={`Animation ${select === 0 ? "AnimationSelected": ""}`} alt="Imagem Pedra" src={Pedra} onClick={()=> setSelect((prev)=> prev === 0 ? null: 0)}/>
          <img className={`Animation ${select === 1 ? "AnimationSelected": ""}`} alt="Imagem Papel" src={Papel} onClick={()=> setSelect(prev => prev === 1 ? null: 1)}/>
          <img className={`Animation ${select === 2 ? "AnimationSelected": ""}`}  alt="Imagem Tesoura" src={Tesoura} onClick={()=> setSelect(prev => prev === 2 ? null: 2)}/>
        </div>
      </div>
    </>
  );
};

export default CardJogo;
