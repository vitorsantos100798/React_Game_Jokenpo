import { createContext } from "react";
import { useState, useEffect } from "react";
import Pedra from "../assets/Pedra.png";
import Papel from "../assets/Papel.png";
import Tesoura from "../assets/Tesoura.png";

export const MainContext = createContext();

export const ContextProvider = ({ children }) => {
// State da Imagem
  const [imageloop, setImageLoop] = useState(null);
  const [imageloopTwo, setImageLoopTwo] = useState(null);
  const [select, setSelect] = useState(null);
// State dos Pontos
  const [yourPoints, setYourpoints] = useState(0);
  const [playerOne, setPlayerOnepoints] = useState(0);
  const [playerTwo, setPlayerTwopoints] = useState(0);
// Contador de Rodadas
  const [roundCount, setRoundCount] = useState(0);
// Indicador de qual jogador ganhou e perdeu
  const [logYourPoints, setLogYourpoints]= useState();
  const [logPlayerOnePoints, setLogPlayerOnepoints]= useState();
 
  const [logPlayerTwoPoints, setLogPlayerTwopoints]= useState();
// state Iniciali
useEffect(()=>{
  setLogYourpoints(null)
  setLogPlayerOnepoints(null)
},[])

// Placar e quem ganha e perde em Rodadas jogador 1
useEffect(() => {
  if (roundCount > 0) {
      if(select === 0 && imageloop === 0){
        setLogYourpoints("Empate")
        setLogPlayerOnepoints("Empate")
      }
      // jogador 2
      if(select === 0 && imageloopTwo === 0){
        setLogYourpoints("Empate")
        setLogPlayerTwopoints("Empate")
      }
      if(select === 1 && imageloop === 1){
        setLogYourpoints("Empate")
        setLogPlayerOnepoints("Empate")
      }
      // jogador 2
      if(select === 1 && imageloopTwo === 1){
        setLogYourpoints("Empate")
        setLogPlayerTwopoints("Empate")
      }
      if(select === 2 && imageloop === 2){
        setLogYourpoints("Empate")
        setLogPlayerOnepoints("Empate")
      }
      // jogador 2
      if(select === 2 && imageloopTwo === 2){
        setLogYourpoints("Empate")
        setLogPlayerTwopoints("Empate")
      }


      // jogador 1 Pedra Ganha Tesoura
      if( select === 0 && imageloop === 2 ){
        setYourpoints(prev => prev + 1)
        setLogYourpoints("Ganhou")
        setLogPlayerOnepoints("Perdeu")
      }
      // jogador 2 
      if( select === 0 && imageloopTwo === 2 ){
        setYourpoints(prev => prev + 1)
        setLogYourpoints("Ganhou")
        setLogPlayerTwopoints("Perdeu")
      }
    /////////////

      // Jogador 1 Pedra Perde Papel
      if(select === 0 && imageloop === 1){
        setPlayerOnepoints((prev) => prev + 1) 
        setLogYourpoints("Perdeu")
        setLogPlayerOnepoints("Ganhou")
      }
      /// Jogador 2
      if(select === 0 && imageloopTwo === 1){
        setPlayerTwopoints((prev) => prev + 1) 
        setLogYourpoints("Perdeu")
        setLogPlayerTwopoints("Ganhou")
      }
      ///////////////////////////////


      // jogador 1 -- Papel Perde Tesoura
      if(select === 1 && imageloop === 2){
        setPlayerOnepoints((prev) => prev + 1) 
        setLogYourpoints("Perdeu")
        setLogPlayerOnepoints("Ganhou")
      }

      // Jogador 2
      if(select === 1 && imageloopTwo === 2){
        setPlayerTwopoints((prev) => prev + 1) 
        setLogYourpoints("Perdeu")
        setLogPlayerTwopoints("Ganhou")
      }
      ///////////////////////////

// Jogador 2
if(select === 1 && imageloopTwo === 0){
  setPlayerTwopoints((prev) => prev + 1) 
  setLogYourpoints("Perdeu")
  setLogPlayerTwopoints("Ganhou")
}
///////////////////////////

      // jogador 1  Tesoura  Ganha Papel
      if(select === 2 && imageloop === 1){
        setYourpoints(prev => prev + 1)
        setLogYourpoints("Ganhou")
        setLogPlayerOnepoints("Perdeu")
      }
      /// Jogador 2
      if(select === 2 && imageloopTwo === 1){
        setYourpoints(prev => prev + 1)
        setLogYourpoints("Ganhou")
        setLogPlayerTwopoints("Perdeu")
      }
      //////////////////
      /// Jogador Tesoura Perde Pedra
      if(select === 2 && imageloop === 0){
        setPlayerOnepoints((prev) => prev + 1) 
        setLogYourpoints("Perdeu")
        setLogPlayerOnepoints("Ganhou")
      }
    /// jogador 2
    if(select === 2 && imageloopTwo === 0){
      setPlayerTwopoints((prev) => prev + 1) 
      setLogYourpoints("Perdeu")
      setLogPlayerTwopoints("Ganhou")
    }
  }
  }, [roundCount]);
  

  //Random dos Números
const random = (min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomTwo = (min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Handler de Imagens
const handlerLoopImage = () => {
  if (imageloop === 0) {
    return <img src={Pedra} alt="Imagem Pedra"  style={{ width: "100px", height: "100px" }} />;
  }
  if (imageloop === 1) {
    return <img src={Papel} alt="Imagem Papel" style={{ width: "100px", height: "100px" }} />;
  }
  if (imageloop === 2) {
    return <img src={Tesoura} alt="Imagem Tesoura" style={{ width: "100px", height: "100px" }} />;
  }
};
const handlerLoopImageTwo = () => {
  if (imageloopTwo === 0) {
    return <img src={ Pedra } alt="Imagem Pedra" style={{ width: "100px", height: "100px" }} />;
  }
  if (imageloopTwo === 1) {
    return <img src={ Papel } alt="Imagem Papel" style={{ width: "100px", height: "100px" }} />;
  }
  if (imageloopTwo === 2) {
    return <img src={ Tesoura } alt="Imagem Tesoura" style={{ width: "100px", height: "100px" }} />;
  }
};


  
return (
  <MainContext.Provider
    value={{
      select,
      setSelect,
      imageloop,
      setImageLoop,
      handlerLoopImage,
      yourPoints,
      playerOne,
      playerTwo,
      setImageLoopTwo,
      handlerLoopImageTwo,
      logYourPoints,
      logPlayerOnePoints,
      logPlayerTwoPoints,
      setRoundCount,
      roundCount,
      random,
      randomTwo,
      setYourpoints,
      setPlayerOnepoints,
      setPlayerTwopoints,
      setLogYourpoints,
      setLogPlayerOnepoints,
      setLogPlayerTwopoints


    }}
  >
    {children}
  </MainContext.Provider>
);
};
