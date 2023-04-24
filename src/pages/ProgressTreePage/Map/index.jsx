import React from "react";
import s from "./index.module.scss";

const Map = () => {
  return (
    <div className={s.root}>
      <div class={s.timeline}>
        <div class={s.timeEmpty}></div>
        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineComponent + ' ' + s.timelineContent}>
          <h3>HTML</h3>
          <p>Some Text</p>
        </div> 

        <div class={s.timelineComponent + ' ' + s.timelineContent}> 
          <h3>CSS</h3>
          <p>Some Text.</p>
        </div>
        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineEmpty}></div>
        <div class={s.timelineEmpty}></div>

        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineComponent + ' ' + s.timelineContent}>
          <h3>Javascript</h3>
          <p>Some Text.</p>
        </div>

        <div class={s.timelineComponent + ' ' + s.timelineContent}>
          <h3>CSS</h3>
          <p>Some Text.</p>
        </div>
        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineEmpty}></div>

        <div class={s.timelineEmpty}></div>

        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineComponent + ' ' + s.timelineContent}>
          <h3>Javascript</h3>
          <p>Some Text.</p>
        </div>

        <div class={s.timelineComponent + ' ' + s.timelineContent}>
          <h3>CSS</h3>
          <p>Some Text.</p>
        </div>
        <div class={s.timelineMiddle}>
          <div class={s.timelineCircle}></div>
        </div>
        <div class={s.timelineEmpty}></div>
      </div>
    </div>
  );
};

export default Map;
