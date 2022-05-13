import React from "react";
import { useContext } from "react";
import { MainContext } from "../../contexts/Context";
import { useNavigate } from "react-router-dom";
import "./placar.css";

const ref = {
  Ganhou: "Gain",
  Perdeu: "Perdeu",
  Empate: "Empate",
};

const Placar = () => {
  let navigate = useNavigate();
  const { playerOne, playerTwo, yourPoints, allRounds} =
    useContext(MainContext);

  return (
    <>
      <div className="ContainerPlacar">
        <div className="ContainerContent">
          <div className="TextPoints">
            <span>YOUR POINTS</span>
            <span>PLAYER ONE</span>
            <span>PLAYER TWO</span>
          </div>
          <div className="ContainerPoints">
            <div 
            className={ref[allRounds[allRounds.length - 1][0]]}
            >
              {yourPoints}
            </div>

            <div
            className={ref[allRounds[allRounds.length - 1][1]]}
            >{playerOne}</div>

            <div
            className={ref[allRounds[allRounds.length - 1][2]]}
            >{playerTwo}</div>
          </div>
        </div>
        {yourPoints === 5 ? navigate("/Champion"): null}
        {playerOne === 5 ? navigate("/Champion"): null}
        {playerTwo === 5 ? navigate("/Champion"): null}
      </div>
    </>
  );
};

export default Placar;
