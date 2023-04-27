import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import icon3 from "../../assets/settings.png";
import { Link, json } from "react-router-dom";
import DarkMode from "./DarkMode";
import audio from "../../assets/audio/back-songs.mp3";
import useSound from "use-sound";
import { Howl } from "howler";

const ParamsPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [play, { stop }] = useSound(audio);

  useEffect(() => {
    const data = window.localStorage.getItem("IS_CHECKED");
    if (data !== null) setIsChecked(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("IS_CHECKED", JSON.stringify(isChecked));
  }, [isChecked]);

  function checkSong() {
    const data = JSON.parse(window.localStorage.getItem("IS_CHECKED"));
    console.log(data);
    if (data === true) {
      setIsChecked(!data);
      stop();
    } else if (data === false) {
      setIsChecked(!data);
      play();
    }
  }

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
              <h2>Music</h2>
              <button onClick={checkSong} className={s.musicBtn}>
                <b>Вкл/Выкл</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParamsPage;
