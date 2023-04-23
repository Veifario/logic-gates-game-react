import React, { useState } from "react";
import { useSelector } from "react-redux";
import { calcPassedLvls } from "../../../utils";
import s from "./index.module.scss";
import Users from "../Users";
import AddButton from "../AddButton";
import AddModal from "../AddModal";
import Modal from "../../../components/Modal";
import Modal2 from "../../../components/Modal2";
import DeleteModal from "../DeleteModal";

const UsersList = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [chosenId, setChosenId] = useState(0);

  const users = useSelector((state) => state.progress.usersProgress);

  const displayUsers = () =>
    users.map(({ id, userName, date, lvls }) => (
      <Users
        key={id}
        userName={userName}
        date={date}
        lvls={calcPassedLvls(lvls)}
        setIsVisible={setDeleteModal}
        onClick={() => setChosenId(id)}
      />
    ));

  return (
    <div className="container">
      <AddButton setIsVisible={setModal} />
      <Modal isVisible={modal} setIsVisible={setModal}>
        <AddModal setIsVisible={setModal} />
      </Modal>
      <Modal2 isVisible={deleteModal} setIsVisible={setDeleteModal}>
        <DeleteModal id={chosenId} setIsVisible={setDeleteModal} />
      </Modal2>
      <div className={s.root}>{displayUsers()}</div>
    </div>
  );
};

export default UsersList;
