import React from "react";
import "./champion.css";
import { Link } from "react-router-dom";
import Trofeu from "../../assets/Trofeu.png";
import { useContext } from "react";
import { MainContext } from "../../contexts/Context";
const Champion = () => {
  const { yourPoints, playerOne, playerTwo,
    setYourpoints,
    setPlayerOnepoints,
    setPlayerTwopoints,
    setLogYourpoints,
    setLogPlayerOnepoints,
    setLogPlayerTwopoints,
    setRoundCount } = useContext(MainContext);
    

    const HandlerDefault = ()=>{
      return setRoundCount(0),
      setYourpoints(0),
      setPlayerOnepoints(0),
      setPlayerTwopoints(0),
      setLogYourpoints(null),
      setLogPlayerOnepoints(null),
      setLogPlayerTwopoints(null)
    }
    
  const HandlerChampion = ()=>{
    if(yourPoints === 3){
      return "YOU"
    }
    if(playerOne === 3){
      return "PLAYER ONE"
    }
    if(playerTwo === 3){
      return "PLAYER TWO"
    }
  }
  return (
    <>
      <div class="wrapper">
        <nav>
          <img
            src={Trofeu}
            alt="Imagem Pedra"
            style={{ width: "300px", height: "300px" }}
          />
          <h6>The Champion was..
            <br/>
            <span>{HandlerChampion()}!</span>
            </h6>
          <Link to="/" className="Btn-Link" onClick={()=> HandlerDefault()}>
            New Game
          </Link>
        </nav>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
};

export default Champion;
