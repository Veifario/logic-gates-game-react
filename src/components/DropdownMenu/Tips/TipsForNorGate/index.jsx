import React from "react";
import s from "./index.module.scss";
import norGate from "../../../../assets/gates/norGate.png";


const TipsForNorGate = () => {
  return (
    <div className={s.root}>
      <img src={norGate} alt="" />

      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default TipsForNorGate;
