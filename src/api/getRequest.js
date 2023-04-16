import axios from "axios";

export const getUsers = async () => {
  const { data } = axios.get("http://localhost:3001/users");
  return data;
};

export const getProgress = async () => {
  const { data } = axios.get("http://localhost:3001/users");
  return data;
};
