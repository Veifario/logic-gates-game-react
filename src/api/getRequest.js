import axios from "axios";

export const getUsers = async () => {
	const { data } = await axios.get("http://localhost:3001/users");
	return data;
};

export const getProgress = async () => {
	const { data } = await axios.get("http://localhost:3001/progress");
	return data;
};

export const getLvlLogic = async (id) => {
	const { data } = await axios.get(`http://localhost:3001/lvlsLogic/${id}`);
	return data;
};
