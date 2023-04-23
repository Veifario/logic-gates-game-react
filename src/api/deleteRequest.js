import axios from "axios";

export const deleteUsers = async (id) => {
  await axios.delete(`http://localhost:3001/progress/` + id);
};

