import React, { Children } from "react";
import s from "./index.module.scss";

const Checkbox = ({ ...props }) => {
  return <input className={s.root} type="checkbox" {...props}></input>;
};

export default Checkbox;
