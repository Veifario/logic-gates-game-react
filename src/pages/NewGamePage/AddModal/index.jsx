import s from "./index.module.scss";
import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { getUploadDate } from "../../../utils/index";
import { request, requestError } from "../../../redux/actions";
import { postUsers } from "../../../api/postRequest";
import { giveProgress } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getLvlsLength } from "../../../api/getRequest";

const AddModal = ({ setIsVisible }) => {
  const posts = useSelector((state) => state.progress.usersProgress);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    userName: "",
    date: "",
  });

  const getLvls = async () => {
    const lvlsLength = await getLvlsLength();
    let lvls = [];
    lvls.push({
      active: true,
      passed: false,
    });
    for (let i = 1; i < lvlsLength; i++)
      lvls.push({
        active: false,
        passed: false,
      });

    return lvls;
  };

  const addNewUser = async () => {
    const newUser = {
      id: uniqueId(),
      userName: inputValue.userName,
      date: getUploadDate(),
      lvls: await getLvls(),
    };
    const updatedPosts = [...posts, newUser];
    try {
      dispatch(request());
      await postUsers(newUser);
      dispatch(giveProgress(updatedPosts));
    } catch ({ message }) {
      dispatch(requestError(message));
    }
    setInputValue({ ...inputValue, userName: "" });
    setIsVisible(false);
  };

  return (
    <div className={s.root}>
      <img
        className={s.img}
        src="https://i.ytimg.com/vi/Ub_uiWIa-Cs/maxresdefault.jpg"
        alt=""
      />
      <div className={s.addContent}>
        <input
          className={s.inp}
          type="text"
          placeholder="User Name is ..."
          value={inputValue.userName}
          onChange={(e) =>
            setInputValue({ ...inputValue, userName: e.target.value })
          }
        />
        <button onClick={addNewUser} className={s.create}>
          Create Progress
        </button>
      </div>
    </div>
  );
};

export default AddModal;
