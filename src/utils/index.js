import moment from "moment";

// Get date of upload new acc
export const getUploadDate = () => moment().format("D/MM/YYYY HH:mm:ss");

// Calculating score
export const calcPassedLvls = (lvls) => {
	let passedAmount = 0;
	for (const lvl in lvls) {
		if (lvls[lvl].passed) passedAmount++;
	}
	return passedAmount;
};
