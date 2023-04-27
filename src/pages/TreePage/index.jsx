import React, { useEffect } from "react";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  exactUser,
  lvlsAccessFetch,
  request,
  requestError,
} from "../../redux/actions";
import { getById } from "../../api/getRequest";
import Loader from "../../components/Loader";
import { updateProgressDate } from "../../api/updateRequest";
import { getUploadDate } from "../../utils/index";

const TreePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const status = useSelector((state) => state.progress.loadingStatus);
  const { userName } = useSelector((state) => state.progress.exactUser);

  const fetchCards = async () => {
    try {
      dispatch(request());
      const data = await getById(params.id);
      dispatch(exactUser(data));
      dispatch(lvlsAccessFetch(data.lvls));
    } catch (error) {
      dispatch(requestError(error));
    }
  };

  const handleUpdateProgressDate = () => {
    updateProgressDate(params.id, getUploadDate());
    navigate("/");
    navigate(0);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return status === "loading" ? (
    <Loader />
  ) : (
    <div>
      <button onClick={handleUpdateProgressDate}>!open</button>
      <h1>{userName}</h1>
      <Map />
    </div>
  );
};

export default TreePage;