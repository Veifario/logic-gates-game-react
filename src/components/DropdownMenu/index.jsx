import React from "react";
import s from "./index.module.scss";
import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
  const data = [
    { id: 1, text: "Not gate" },
    { id: 2, text: "And gate" },
    { id: 3, text: "Or gate" },
    { id: 4, text: "Nand gate" },
    { id: 5, text: "Nor gate" },
  ];

  const displayItems = () =>
    data.map((e) => {
      return <DropdownItem key={e.id} text={e.text} />;
    });
  return (
    <div className={s.root}>
      <h3>TIPS</h3>
      {displayItems()}
    </div>
  );
};

export default DropdownMenu;
