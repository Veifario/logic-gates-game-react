import axios from "axios";

export const postUsers = async (newUser) => {
  await axios.post("http://localhost:3001/progress", newUser);
};
