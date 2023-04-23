import React from "react";
import s from "./index.module.scss";
import { deleteUsers } from "../../../api/deleteRequest";
import { deleteProgress } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const DeleteModal = ({ id, setIsVisible }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.progress.usersProgress);

  const deleteUser = () => {
    const filtereUsers = users.filter((e) => e.id !== id);
    dispatch(deleteProgress(filtereUsers));
    deleteUsers(id);
    setIsVisible(false);
  };
  
  return (
    <div className={s.root}>
      <h1>Are you sure you want to delete?</h1>
      <div className={s.btns}>
        <button className={s.agree} onClick={deleteUser}>
          Yes
        </button>
        <button className={s.disAgree} onClick={() => setIsVisible(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
