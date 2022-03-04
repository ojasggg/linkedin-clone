import React from "react";
import "./InputOption.css";

function InputOption({ color, Icon, title }) {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{ color: color }}></Icon>}
      {title && <h4>{title}</h4>}
    </div>
  );
}

export default InputOption;
