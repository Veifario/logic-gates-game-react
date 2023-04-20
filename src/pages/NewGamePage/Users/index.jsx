import React from "react";
import s from "./index.module.scss";

const Users = ({ userName, date, lvls, id }) => {
  return (
    <div className={s.root}>
      <h2>{userName}</h2>
      <p>{date}</p>
      <p>{lvls}</p>
    </div>
  );
};

export default Users;
