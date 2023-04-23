import s from "./index.module.scss";

const LoadUsers = ({ userName, date, lvls }) => {
  return (
    <div className={s.root}>
      <div className={s.c}>
        <h2>{userName}</h2>
      </div>
      <div className={s.v}>
        <h4>{date}</h4>
      </div>
      <div className={s.b}>
        <h3>{lvls}</h3>
      </div>
    </div>
  );
};

export default LoadUsers;
