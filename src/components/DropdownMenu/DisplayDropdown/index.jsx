import React, { useState } from "react";
import s from "./index.module.scss";
import DropdownMenu from "..";

const DisplayDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={s.root}>
      <button onClick={() => setIsOpened(!isOpened)} className={s.openBtn}>Help!</button>
      {isOpened && <DropdownMenu />}
    </div>
  );
};

export default DisplayDropdown;
