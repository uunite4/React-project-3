import React from "react";
import TrollFace from "../images/trollFace.png"

export default function Nav() {
  return (
    <div className="nav">
      <span>
        <img src={TrollFace} />
        <p>Meme Generator</p>
      </span>
      <p>React Course - Project 3</p>
    </div>
  )
}