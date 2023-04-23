import React, { useEffect } from "react";
import s from "./index.module.scss";
import icon1 from "../../assets/font-play.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProgress } from "../../api/getRequest";
import { giveProgress } from "../../redux/actions";
import { request, requestError } from "../../redux/actions";
import LoadUserList from "../LoadPage/LoadUsersList";
import Loader from "../../components/Loader";

const LoadPage = () => {
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

  return status === "loading" ? (
    <Loader />
  ) : (
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
            <h1> Выберите ячейку загрузки</h1>
          </div>
        </div>
        <div className={s.addDisplay}>
          <LoadUserList />
        </div>
      </div>
    </div>
  );
};

export default LoadPage;
