import React from "react";
import s from "./index.module.scss";
import DropdownItem from "./DropdownItem";
import TipsForNotGate from "./Tips/TipsForNotGate";

const DropdownMenu = () => {


  const data = [
    { id: 1, text: "Not gate" },
    { id: 2, text: "And gate" },
    { id: 3, text: "Or gate" },
    { id: 4, text: "Nand gate" },
    { id: 5, text: "Nor gate" },
  ];

  const displayItems = () =>
    data.map(({ id, text }) => {
      return <DropdownItem key={id} text={text} />;
    });

  return (
    <div className={s.root}>
      <TipsForNotGate />
      {displayItems()}
    </div>
  );
};

export default DropdownMenu;
