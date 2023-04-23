import React from "react";
import { useState } from "react";
import s from "./index.module.scss";

const Interactive = () => {
  const [lampColor, setLampColor] = useState("transparent");
  const [lampShadow, setLampShadow] = useState("none");
  const [lineColor, setLineColor] = useState("white");
  const [lineShadow, setLineShadow] = useState("none");
  const [leverState, setLeverState] = useState("blue");
  const [switcherState, setSwitcherState] = useState("white");
  const [monitorText, setMonitorText] = useState("black");

  const changeMonitorTextColor = () => {
    if (monitorText === "black") {
      setMonitorText("green");
    } else setMonitorText("black");
  };

  // Switcher changer
  const switcherChanger = () => {
    if (switcherState === "white") {
      setSwitcherState("green");
    } else setSwitcherState("white");
  };

  // Lamp color/shadow changers
  const colorChanger = () => {
    if (lampColor === "transparent") {
      setLampColor("yellow");
    } else setLampColor("transparent");
  };

  const shadowChanger = () => {
    if (lampShadow === "none") {
      setLampShadow("0 0 10px 2px rgba(255,255,0,.7)");
    } else setLampShadow("none");
  };

  // Line color/shadow changers
  const lineColorChanger = () => {
    if (lineColor === "white") {
      setLineColor("rgb(135, 196, 155)");
    } else setLineColor("white");
  };
  const lineShadowChanger = () => {
    if (lineShadow === "none") {
      setLineShadow("0 0 25px 0 rgba(193, 214, 168, 0.81)");
    } else setLineShadow("none");
  };

  // Lever logic
  const leverLogic = () => {
    if (leverState === "blue") {
      setLeverState("red");

      setLineColor("white");
      setLineShadow("none");
      setLampColor("transparent");
      setLampShadow("none");
      setMonitorText("black");
    } else {
      setLeverState("blue");

      setLineColor("RGB(135, 196, 155)");
      setLineShadow("0 0 25px 0 rgba(193, 214, 168, 0.81)");
      setLampColor("yellow");
      setLampShadow("0 0 10px 2px rgba(255,255,0,.7)");
      setMonitorText("green");
    }
  };

  // Elec. flow logic
  const ElecFlowLogic = () => {
    if (switcherChanger === "white") {
    }
  };

  return (
    <div className={s.root}>
      <button
        onClick={() => {
          colorChanger();
          shadowChanger();
          lineColorChanger();
          lineShadowChanger();
          switcherChanger();
          changeMonitorTextColor();
        }}
        style={{ backgroundColor: switcherState }}
        className={s.switcher}
      ></button>
      <button
        style={{ backgroundColor: leverState }}
        onClick={() => {
          leverLogic();
        }}
        className={s.lever}
      ></button>
      <div
        className={s.line1}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line2}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line3}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line4}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line5}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line6}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div
        className={s.line7}
        style={{ borderColor: lineColor, boxShadow: lineShadow }}
      ></div>
      <div id="pointer" className={s.pointer}></div>
      <div
        id="lamp"
        className={s.lamp}
        style={{ backgroundColor: lampColor, boxShadow: lampShadow }}
      ></div>
      <div
        id="lamp2"
        className={s.lamp2}
        style={{ backgroundColor: lampColor, boxShadow: lampShadow }}
      ></div>

      {/* Monitor */}
      <div className={s.monitor}>
        <div className={s.inner}>
          <div className={s.body}>
            <div style={{ color: monitorText }} className={s.info}>
              привет! давайте мы расскажем немного об этой игре. <br />
              Наша игра представляет собой симулятор, который будет полезен
              любителям программирования и тем, кто только начинает свой путь в
              этой среде. Вам предстоит изучить непростую науку и внедрить ее в
              жизнь, чтобы обеспечить благополучное существование своему герою.
              Нажимай на кнопку "Играть", и приступай покорять мир кодинга,
              удачи)
            </div>
          </div>
          <div className={s.holder1}></div>
          <div className={s.holder2}></div>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
