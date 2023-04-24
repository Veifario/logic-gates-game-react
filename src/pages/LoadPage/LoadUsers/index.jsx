import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import s from "./index.module.scss";

const LoadUsers = ({ id, userName, date, lvls }) => {
  const status = useSelector((state) => state.progress.loadingStatus);

  const navigate = useNavigate()

  return status === "loading" ? (<Loader /> ) : (
    <div className={s.root}>
      <button className={s.rootBtn} onClick={() => navigate(`/tree/${id}`)}>
        <div className={s.c}>
          <h2>{userName}</h2>
        </div>
        <div className={s.v}>
          <h4>{date}</h4>
        </div>
        <div className={s.b}>
          <h3>{lvls}</h3>
        </div>
      </button>
    </div>
  );
};

export default LoadUsers;
