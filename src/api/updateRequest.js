import axios from "axios";

export const lvlUpRequest = async (id, lvls) => {
	await axios.patch(`http://localhost:3001/progress/${id}`, { lvls });
};

export const updateProgressDate = async (id, date) => {
	await axios.patch(`http://localhost:3001/progress/${id}`, { date });
};
