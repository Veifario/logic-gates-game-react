import React from "react";
import s from "./index.module.scss";
import nandGate from "../../../../assets/gates/nandGate.png";


const TipsForNandGate = () => {
  return (
    <div className={s.root}>
      <img src={nandGate} alt="" />

      <table>
       <tbody>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>A nand B</th>
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
            <td>0</td>
          </tr>
       </tbody>
      </table>
    </div>
  );
};

export default TipsForNandGate;
