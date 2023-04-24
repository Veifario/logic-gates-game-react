import React from "react";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardList = () => {

    const params = useParams()

    console.log(params);

  const cards = useSelector((state) => state.cardList);
  const dispatch = useDispatch();



  return <div className={s.root}></div>;
};

export default CardList;
