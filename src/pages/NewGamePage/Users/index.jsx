import s from "./index.module.scss";
import icon from "../../../assets/x-symbol.png";

const Users = ({ userName, date, lvls, setIsVisible, ...props }) => {
  return (
    <div {...props} className={s.root}>
      <div className={s.c}>
        <h2>{userName}</h2>
      </div>
      <div className={s.v}>
        <h4>{date}</h4>
      </div>
      <div className={s.b}>
        <h3>{lvls}</h3>
      </div>
      <img
        onClick={() => setIsVisible(true)}
        className={s.img}
        src={icon}
        alt=""
      />
    </div>
  );
};

export default Users;
