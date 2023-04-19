import React from "react";
import s from "./index.module.scss";
import notGate from "../../../../assets/notGate.png";


const TipsForNotGate = () => {
  return (
    <div className={s.root}>
      <img src={notGate} alt="" />

      <table>
        <tr>
          <th>A</th>
          <th>Not A</th>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  );
};

export default TipsForNotGate;
