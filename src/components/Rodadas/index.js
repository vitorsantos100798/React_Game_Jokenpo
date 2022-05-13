import React from "react";
import "./rodadas.css";
import { useContext } from "react";
import { MainContext } from "../../contexts/Context";
const Rodadas = () => {
  const { roundCount, allRounds } = useContext(MainContext);
  return (
    <>
      <div className="ContainerRodadas">
        <div className="ContainerRounds">
          <span>ROUNDS</span>
        </div>
        <div className="ContainerLoopRodadas">
          <div className="NumberRounds">
            <span>Nº</span>
          </div>
          <div>
            <span>YOU</span>
          </div>
          <div>
            <span> PLAYER ONE</span>
          </div>
          <div>
            <span>PLAYER TWO</span>
          </div>
        </div>

        <div className="ResultRounds">
          <div className="NumberRoundsList">
            <h1>{roundCount}</h1>
          </div>
          <div>{allRounds[allRounds.length - 1][0]}</div>
          <div>{allRounds[allRounds.length - 1][1]}</div>
          <div>{allRounds[allRounds.length - 1][2]}</div>
        </div>
      </div>
    </>
  );
};

export default Rodadas;
