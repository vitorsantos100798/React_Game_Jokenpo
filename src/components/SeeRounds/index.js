import React from "react";
import { useEffect, useState } from "react";
import "./seeRounds.css";
import { useContext } from "react";
import { MainContext } from "../../contexts/Context";
import { Link } from "react-router-dom";

const ListRounds = () => {
  const { allRounds } = useContext(MainContext);
  return (
    <>
      <div className="ContainerSeeRoundsTwo">
        <h1 className=" Texth1">LIST OF ROUDS</h1>
        <Link to="/" className="Btn-List-Two">
          BACK IN THE GAME
        </Link>
        <div className="ContainerRoundsTwo">
            {allRounds.map((item, index) => index > 0 &&  (
              <div className="ContainerRodadas" style={{ width: "500px", height: "175px" }} >
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
                  <h1>{index}</h1>
                </div>
                <div>{item[0]}</div>
                <div>{item[1]}</div>
                <div>{item[2]}</div>
              </div>
            </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default ListRounds;
