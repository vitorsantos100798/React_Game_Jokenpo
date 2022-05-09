import React from "react";
import Header from "../components/Header";
import CardJogo from "../components/CardJogo";
import CardJogoPc from "../components/CardJogoPc";
import Button from "../components/Button";
import Placar from "../components/Placar";
import Rodadas from "../components/Rodadas";
import Color from "../components/colorSignificate";
import { Link } from "react-router-dom";
import "./main.css";

function Main() {
  return (
    <>
      <div className="ContainerHeader">
        <Header />
      </div>
      <div className="ContainerCardJogos">
        <CardJogo />
        <span className="BorderX">X</span>
        <CardJogoPc />
      </div>
      <div className="ContainerButtonGame">
        <Link to="/ListRounds" className="Btn-List">
         SEE ROUNDS
        </Link>
        <Button />
      </div>
      <div class="container">
        <div class="progress-bar"></div>
      </div>
      <div className="ContainerUsuario">
        <Rodadas />
        <Color />
        <Placar />
      </div>
    </>
  );
}

export default Main;
