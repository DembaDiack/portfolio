import React from "react";
import CSS from "./CenterIcon.module.css";

interface Props 
{
    icon : string
}
function CenterIcon(props:Props) {
  return (
    <div>
      <img className={CSS.icon} src={props.icon} width={50} />
    </div>
  );
}

export default CenterIcon;
