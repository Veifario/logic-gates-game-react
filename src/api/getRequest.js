import axios from "axios";

export const getProgress = async () => {
  const { data } = await axios.get("http://localhost:3001/progress");
  return data;
};

export const getLvlsLength = async () => {
  const { data } = await axios.get(`http://localhost:3001/lvlsLogic`);
  return data.length;
};

export const getLvlLogic = async (id) => {
  const { data } = await axios.get(`http://localhost:3001/lvlsLogic/${id}`);
  return data;
};

export const getById = async (id) => {
  const { data } = await axios.get("http://localhost:3001/progress/" + id);
  return data;
};
