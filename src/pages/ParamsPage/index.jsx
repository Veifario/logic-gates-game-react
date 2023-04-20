import React from "react";
import s from "./index.module.scss";
import icon3 from "../../assets/settings.png";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const ParamsPage = () => {
  return (
    <div className={s.root}>
      <div className={s.bac}>
        <div className={s.top_content}>
          <div className={s.link_card}>
            <Link className={s.link} to="/">
              !open
            </Link>
          </div>
          <div className={s.title}>
            <img src={icon3} alt="" />
            <h1>Параметры</h1>
          </div>
        </div>
        <div className={s.addDisplay}>
          <div className={s.bacParams}>
            <h2>Параметры</h2>
            <div className={s.content}>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParamsPage;
