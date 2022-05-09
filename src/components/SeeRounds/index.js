import React from 'react'
import "./seeRounds.css"
import { useContext } from "react";
import { MainContext } from "../../contexts/Context"
const ListRounds = () => {
  const { 
    roundCount, 
    logYourPoints,
    logPlayerOnePoints,
    logPlayerTwoPoints, } = useContext(MainContext);
  return (
    <>
    <h1>Hellou word</h1>
    </>
  )
}

export default ListRounds;