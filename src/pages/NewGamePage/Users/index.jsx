import React from "react";
import s from "./index.module.scss";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../../../api/deleteRequest";

const Users = ({ userName, userSurname, score, id }) => {
/*   const users = useSelector((state) => state.usersInfo);
  const dispatch = useDispatch();

  const deleteUsers = () => {
    const filterData = users.filter((e) => e.id !== id);

    deleteUsers(id);
  }; */

  return (
    <div className={s.root}>
      <h2>{userName}</h2>
      <h2>{userSurname}</h2>
      <p>{score}</p>
    </div>
  );
};

export default Users;
