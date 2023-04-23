import { useSelector } from "react-redux";
import s from "./index.module.scss";
import { calcPassedLvls } from "../../../utils";
import LoadUsers from "../LoadUsers";

const LoadUserList = () => {
  const users = useSelector((state) => state.progress.usersProgress);

  const displayUsers = () =>
    users.map(({ id, userName, date, lvls }) => (
      <LoadUsers
        key={id}
        id={id}
        userName={userName}
        date={date}
        lvls={calcPassedLvls(lvls)}
      />
    ));

  return (
    <div className={s.root}>{displayUsers()}</div>
  );
};

export default LoadUserList;
