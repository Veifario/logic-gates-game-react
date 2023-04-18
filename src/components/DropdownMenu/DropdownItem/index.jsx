import React from "react";
import s from "./index.module.scss";

const DropdownItem = ({ text }) => {
  return (
    <div className={s.root}>
      
      <button>{text}</button>
    </div>
  );
};

export default DropdownItem;
