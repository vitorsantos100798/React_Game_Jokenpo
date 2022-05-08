import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../contexts/Context'
import "./placar.css";

const Placar = ()=> {
    const {
    playerOne,
    playerTwo,
    yourPoints,
    logYourPoints,
    logPlayerTwoPoints,
    logPlayerOnePoints,
    roundCount,
    

} = useContext(MainContext);
    return(
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
                    className=
                    {`
                       ${logYourPoints === "Ganhou" ? "Gain": ""} 
                    || ${logYourPoints === "Empate"? "Empate": " "}  
                    || ${logYourPoints === "Perdeu" && roundCount > 0 ? "Perdeu": "" }
                    `}>
                    {yourPoints}
                    </div>

                    <div
                   className=
                   {`
                       ${logPlayerOnePoints === "Ganhou" ? "Gain": ""} 
                    || ${logPlayerOnePoints === "Empate"? "Empate": " "}  
                    || ${logPlayerOnePoints === "Perdeu" && roundCount > 0 ? "Perdeu": "" }
                   `}>
                    {playerOne}</div>

                    <div
                     className=
                     {`
                        ${logPlayerTwoPoints === "Ganhou" ? "Gain": ""} 
                     || ${logPlayerTwoPoints === "Empate"? "Empate": " "}  
                     || ${logPlayerTwoPoints === "Perdeu" && roundCount > 0 ? "Perdeu": "" }
                    `}>
                     {playerTwo}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Placar;