import React from "react";
import s from "./index.module.scss";
import norGate from "../../../../assets/NorGate.png";


const TipsForNorGate = () => {
  return (
    <div className={s.root}>
      <img src={norGate} alt="" />

      <table>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>A Nor B</th>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  );
};

export default TipsForNorGate;
