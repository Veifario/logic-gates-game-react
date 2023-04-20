import React, { useEffect } from "react";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Users from "../Users";
import { getProgress } from "../../../api/getRequest";
import { giveUserInfo } from "../../../redux/actions";

const UsersList = () => {
  const users = useSelector((state) => state.user.usersInfo);
  const dispatch = useDispatch();
  console.log(users);

  const fetchData = async () => {
    const data = await getProgress();
    dispatch(giveUserInfo(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayUsers = () =>
    users.map((user) => (
      <Users
        key={user.id}
        userName={user.userName}
        userSurname={user.userSurname}
        score={user.score}
      />
    ));

  return <div className={s.root}>{displayUsers()}</div>;
};

export default UsersList;
