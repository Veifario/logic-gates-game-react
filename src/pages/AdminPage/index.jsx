import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";


const AdminPage = () => {
  return (
    <div className={s.root}>
      <div className={s.bac}>
        <div className={s.buttons}>
          <button><Link className={s.link} to="/continue">Продолжить</Link></button>
          <button><Link className={s.link} to="/newgame">Новая игра</Link></button>
          <button><Link className={s.link} to="/load">Загрузить</Link></button>
          <button><Link className={s.link} to="/params">Параметры</Link></button>
          <button><Link className={s.link} to="/credits">Об авторах</Link></button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
