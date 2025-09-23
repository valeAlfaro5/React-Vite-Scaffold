// import React from "react";

export const Btn = ({ texto, color, fun}) => {
  return (
    <button style={{ backgroundColor: color }} onClick={()=>{fun()}}>
      {texto}
    </button>
  );
}