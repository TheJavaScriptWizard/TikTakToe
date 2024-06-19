import React, { useState } from 'react';
import "./button.css"

interface Props {
    Top: string;
    Left: string;
}

function Buttons({ Top, Left }: Props) {
  
  const [top, setTop] = useState(Top);
  const [left, setLeft] = useState(Left);

  const handleClick = (newTop: string, newLeft: string) => {
      setTop(newTop);
      setLeft(newLeft);
  };

  return (
    <>
      <button 
      className="theButton"
      style={{ left: left, top: top }}
      ></button>
    </>
  );
}

export default Buttons;
