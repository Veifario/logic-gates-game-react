import React from "react";
import s from "./index.module.scss";
import Interactive from "./Interactive";

const InteractiveBackround = () => {
  return (
    <div className={s.root}>
      <Interactive />
    </div>
  );
};

export default InteractiveBackround;
