import React, { useEffect } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProgress } from "../../api/getRequest";
import { giveProgress } from "../../redux/actions";
import { request, requestError } from "../../redux/actions";
import icon1 from "../../assets/font-play.png";
import UsersList from "./UsersList";
import Loader from "../../components/Loader";

const NewGamePage = () => {
  const status = useSelector((state) => state.progress.loadingStatus);
  const errorMessage = useSelector((state) => state.progress.errorMessage);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(request());
      const data = await getProgress();
      dispatch(giveProgress(data));
    } catch ({ message }) {
      dispatch(requestError(message));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return status === "loading" ? (<Loader /> ) : (
    <div className={s.root}>
      <div className={s.bac}>
        <div className={s.top_content}>
          <div className={s.link_card}>
            <Link className={s.link} to="/">
              !open
            </Link>
          </div>
          <div className={s.title}>
            <img src={icon1} alt="" />
            <h1> Выберите ячейку записи</h1>
          </div>
        </div>
        <div className={s.usersInfo}>
          <div className={s.first}>
            <h2>Никнейм</h2>
          </div>
          <div className={s.second}>
            <h2>Время</h2>
          </div>
          <div className={s.third}>
            <h2>Уровень</h2>
          </div>
        </div>
        <div className={s.addDisplay}>
          <div className={s.userDisplay}>
            <UsersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGamePage;
