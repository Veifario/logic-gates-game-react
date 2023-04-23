import React from "react";
import s from "./index.module.scss";

const Map = () => {
  return (
    <div className={s.root}>
      <div className={s.timeline__content}>
        <h1>Timeline</h1>

        <ul className={s.timeline}>
          <li className={s.event} data-date="1 lvl">
            <h3 className={s.timeline__content}>Dinosaurs Roamed the Earth</h3>
            <p>RAWWWWWWRRR 🐢🦂</p>
          </li>
          <li className={s.event} data-date="2 lvl">
            <h3>Creative Component Launched</h3>
            <p>"We can be all things to all people!" 📣</p>
          </li>
          <li className={s.event} id="date" data-date="3 lvl">
            <h3>Squareflair was Born</h3>
            <p></p> <p>"We can be all things to Squarespace users!" 📣</p>
          </li>

          <li className={s.event} data-date="4 lvl">
            <h3>Squareflair Today</h3>

            <p>
              Did you know that all of our pixels are hand-forged from the
              rarest of subpixels grown and harvested in the{" "}
              <em>Nerd Forest</em>?
            </p>

            <p>
              <strong>
                Our success can be measured by lives and brands enhanced by 9+
                years of 100% Squarespace-focused service!
              </strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
