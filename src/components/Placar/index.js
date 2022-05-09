import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../contexts/Context'
import { useNavigate } from 'react-router-dom';
import "./placar.css";

const Placar = ()=> {
    let navigate = useNavigate();
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
        {yourPoints === 3 || playerOne === 3 || playerTwo === 3 ? navigate("/Champion")  : null }
        </>
    )
}

export default Placar;