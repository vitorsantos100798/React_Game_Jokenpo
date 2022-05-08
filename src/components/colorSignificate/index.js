import React from 'react'
import "./color.css"
function Color() {
  return (
    <>
    <div className="ContainerColor">
      
      <div className="ColorGrenn">
      <span className="ColorSpan">GANHOU</span>
      </div>
     
      
      <div className="ColorRed">
      <span className="ColorSpan">PERDEU</span>
      </div>
     
      
      <div className="ColorEmpatar">
      <span className="ColorSpan">EMPATE</span>
      </div>
      
    </div>
    </>
  )
}

export default Color;