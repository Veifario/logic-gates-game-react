import React from "react";
import s from "./index.module.scss";
import orGate from "../../../../assets/orGate.png";

const TipsForOrGate = () => {
  return (
    <div className={s.root}>
      <img src={orGate} alt="" />

      <table>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>A or B</th>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
};

export default TipsForOrGate;
