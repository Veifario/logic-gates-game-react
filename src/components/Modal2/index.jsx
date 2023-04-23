import React from "react";
import s from "./index.module.scss";
import icon from "../../assets/icon-x-symbol.png";

const Modal2 = ({ children, isVisible, setIsVisible }) => {
  return (
    <div
      onClick={() => setIsVisible(false)}
      className={isVisible ? s.root : s.notVisible}
    >
      <div onClick={(e) => e.stopPropagation()} className={s.innerModal}>
        <img
          onClick={() => setIsVisible(false)}
          className={s.close}
          src={icon}
          alt=""
        />
        {children}
      </div>
    </div>
  );
};

export default Modal2;
