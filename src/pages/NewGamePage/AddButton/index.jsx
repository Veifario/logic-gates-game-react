import React from "react";
import s from "./index.module.scss";
import icon2 from "../../../assets/plus-sign.png";

const AddButton = ({ setIsVisible }) => {
  return (
    <div className={s.root}>
      <div className={s.addContent}>
        <button onClick={() => setIsVisible(true)} className={s.add_btn}>
          <img src={icon2} alt="" /> 
          <h2>Новая ячейка записи</h2>
        </button>
      </div>
    </div>
  );
};

export default AddButton;
