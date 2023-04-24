import axios from "axios";

export const lvlUpRequest = (id, lvls) => {
	axios.patch(`http://localhost:3001/progress/${id}`, { lvls });
};
