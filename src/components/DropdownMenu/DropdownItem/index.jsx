import React, { useState } from "react";
import s from "./index.module.scss";

const DropdownItem = ({ text }) => {
  return (
    <div className={s.root}>
      <button className={s.item}>{text}</button>
    </div>
  );
};

export default DropdownItem;
